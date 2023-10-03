import "./SongCard.css";
import PropTypes from "prop-types";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { useRef } from "react";
import SpotyLogo from "../../assets/image/spotify.svg?react";
import AppleLogo from "../../assets/image/apple.svg?react";
import AmazonLogo from "../../assets/image/amazon-original.svg?react";
import { useMemo } from "react";

const SongCard = ({ id, title, cover, platforms }) => {
  const platformsMap = useMemo(
    () => ({
      spotify: <SpotyLogo className="spotify-logo" />,
      apple: <AppleLogo className="apple-logo" />,
      amazon: <AmazonLogo className="amazon-logo" />,
    }),
    []
  );

  const calcX = (y, ly) => -(y - ly - calcCenter().y) / 100;
  const calcY = (x, lx) => (x - lx - calcCenter().x) / 100;
  const calcCenter = () => {
    const box = domTarget.current?.getBoundingClientRect();
    const xCenter = (box.left + box.right) / 2;
    const yCenter = (box.top + box.bottom) / 2;
    return {
      x: xCenter,
      y: yCenter,
    };
  };

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, scale, zoom }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) => {
        return (
          !dragging &&
          api({
            rotateX: calcX(py, y.get()),
            rotateY: calcY(px, x.get()),
            scale: 1.03,
          })
        );
      },
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target: domTarget, eventOptions: { passive: false } }
  );

  return (
    <animated.div
      ref={domTarget}
      className="song-display"
      key={id}
      style={{
        transform: "perspective(600px)",
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      <img src={cover} alt={title} />
      <div className="song-info">
        <h3>{title}</h3>
        <div className="platforms-container">
          <span>Listen on: </span>
          <div className="logos-container">
            {Object.keys(platforms).map((platform) => (
              <a
                href={platforms[platform]}
                key={id + "-" + title + "-" + platform}
                rel="noreferrer"
                target="_blank"
              >
                {platformsMap[platform]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

SongCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  cover: PropTypes.string,
  platforms: PropTypes.shape({
    spotify: PropTypes.string,
    apple: PropTypes.string,
  }),
};

export default SongCard;
