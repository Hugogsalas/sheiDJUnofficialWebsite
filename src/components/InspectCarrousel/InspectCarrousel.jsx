import "./InspectCarrousel.css";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Close from "../../assets/image/close.svg?react";

const InspectCarrousel = ({ images, selectedImage = 0, onClose }) => {
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0)");

  useEffect(() => {
    setBackgroundColor("rgba(0, 0, 0, 0.5)");
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="backdrop-container"
      style={{
        backgroundColor,
      }}
    >
      <Close onClick={onClose} />
      <Carousel
        infiniteLoop
        width="100%"
        centerMode
        centerSlidePercentage={50}
        useKeyboardArrows
        selectedItem={selectedImage}
      >
        {images.map((image, index) => (
          <div key={"carousel-" + index} className="carousel-section">
            <img className="carousel-image-item" src={image.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

InspectCarrousel.propTypes = {
  onClose: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    })
  ),
  selectedImage: PropTypes.number,
};

export default InspectCarrousel;
