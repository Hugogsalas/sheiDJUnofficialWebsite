import "./App.css";
import sheiFull from "./assets/image/shei-full.png";
import sheiShow from "./assets/image/tour.jpg";
import Logo from "./assets/image/logo.svg?react";
import Menu from "./assets/image/menu.svg?react";
import VolumeOff from "./assets/image/volume-off.svg?react";
import VolumeOn from "./assets/image/volume-up.svg?react";
import Spotify from "./assets/image/spotify.svg?react";
import Apple from "./assets/image/apple.svg?react";
import Amazon from "./assets/image/amazon.svg?react";
import Instagram from "./assets/image/instagram.svg?react";
import Facebook from "./assets/image/facebook.svg?react";
import Tiktok from "./assets/image/tiktok.svg?react";
import Twitter from "./assets/image/twitter.svg?react";
import Youtube from "./assets/image/youtube.svg?react";
import PlayIcon from "./assets/image/play.svg?react";
import PauseIcon from "./assets/image/pause.svg?react";
import StopIcon from "./assets/image/stop.svg?react";
import BabyAudio from "./assets/audio/baby.mp3";
import SongCard from "./components/SongCard/SongCard";
import TourRow from "./components/TourRow/TourRow";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { useState } from "react";
import picture1 from "./assets/photos/1.jpg";
import picture2 from "./assets/photos/2.jpg";
import picture3 from "./assets/photos/3.jpg";
import picture4 from "./assets/photos/4.jpg";
import picture5 from "./assets/photos/5.jpg";
import picture6 from "./assets/photos/6.jpg";
import picture7 from "./assets/photos/7.jpg";
import picture8 from "./assets/photos/8.jpg";
import picture9 from "./assets/photos/9.jpg";
import picture10 from "./assets/photos/10.jpg";
import picture11 from "./assets/photos/11.jpg";
import picture12 from "./assets/photos/12.jpg";
import picture13 from "./assets/photos/13.jpg";
import picture14 from "./assets/photos/14.jpg";
import picture15 from "./assets/photos/15.jpg";
import picture16 from "./assets/photos/16.jpg";
import InspectCarrousel from "./components/InspectCarrousel/InspectCarrousel";

const last_songs = [
  {
    id: 1,
    title: "Baby",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/76/9a/f7/769af74c-47fb-a528-1a36-d2abdf48a976/4910.jpg/316x316cc.webp",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/album/2l2WM44ntmaopSMAv8g3jT",
      apple: "https://music.apple.com/mx/album/baby-single/1705428466",
      amazon: "https://music.amazon.com.mx/albums/B0CH3S2SXF",
    },
  },
  {
    id: 2,
    title: "Forget",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/73/64/f2/7364f26d-75e5-0682-564a-2ee2f7adb1e2/5404027319490.png/316x316bb-60.jpg",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/album/3kTQcY0dH6NgUDC3UKrodo",
      apple: "https://music.apple.com/mx/album/forget-single/1691902623",
      amazon: "https://music.amazon.com.mx/albums/B0C7LKVCH4",
    },
  },
  {
    id: 3,
    title: "Atlantis",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/16/e9/db/16e9db1d-8955-ea95-5908-80acac6c7bf7/5411530819300.png/316x316bb.webp",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/3fPmrJTxfBuWhYbnHw3M42",
      apple:
        "https://music.apple.com/mx/album/atlantis/1451914554?i=1451914555",
      amazon:
        "https://music.amazon.com.mx/albums/B07NGPRYPD?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_lOgdJwCowesBWZVVUKkwzw87j&trackAsin=B07NGQKYJ6",
    },
  },
  {
    id: 4,
    title: "In My Head",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/69/8f/70/698f700e-7de4-3f34-5234-9853cd4b3885/8720996108567.png/316x316bb.webp",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/5b0TlKyhFvyn3GPxqpZXv4",
      apple: "https://music.apple.com/mx/album/in-my-head-single/1693700377",
    },
  },
  {
    id: 5,
    title: "Euphoric Edge",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/ff/56/00/ff56006a-6c8e-bd33-eb71-272b38668479/artwork.jpg/316x316bb-60.jpg",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/track/2rZKnz5JZOopAoaqv0Y8IK",
      apple: "https://music.apple.com/mx/album/euphoric-edge-single/1441389774",
      amazon:
        "https://music.amazon.com.mx/albums/B07K75F53P?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_MvRxqTlv7aVUWd8UpFzdyfH6I&trackAsin=B07K781GSN",
    },
  },
  {
    id: 6,
    title: "Go Back!",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/8b/d3/a28bd350-ca71-6827-54bb-01a0f2af1828/cover.jpg/316x316bb-60.jpg",
    platforms: {
      spotify: "https://open.spotify.com/intl-es/album/58mvv6HfxIFNflbDVoAkaC",
      apple: "https://music.apple.com/mx/album/go-back-single/1485430539",
    },
  },
];

const tour_dates = [
  {
    id: 1,
    city: "CDMX",
    country: "Mexico",
    place: "Quarry studios",
    event: "MIXX Bunker",
    date: "2023-09-21",
  },
  {
    id: 2,
    city: "Hidalgo",
    country: "Mexico",
    place: "Parque acuatico TE-PATHÉ",
    event: "Aqua color",
    date: "2023-08-05",
  },
  {
    id: 3,
    city: "Jalisco",
    country: "Mexico",
    place: "Krystal Grand Puerto Vallarta",
    event: "Pop travel",
    date: "2023-07-08",
  },
  {
    id: 4,
    city: "Madrid",
    country: "España",
    place: "Ciudad del Rock",
    event: "A summer story",
    date: "2023-06-24, 2023-06-25",
  },
];

const pictures = [
  {
    id: 1,
    url: picture1,
  },
  {
    id: 2,
    url: picture2,
  },
  {
    id: 3,
    url: picture3,
  },
  {
    id: 4,
    url: picture4,
  },
  {
    id: 5,
    url: picture5,
  },
  {
    id: 6,
    url: picture6,
  },
  {
    id: 7,
    url: picture7,
  },
  {
    id: 8,
    url: picture8,
  },
  {
    id: 9,
    url: picture9,
  },
  {
    id: 10,
    url: picture10,
  },
  {
    id: 11,
    url: picture11,
  },
  {
    id: 12,
    url: picture12,
  },
  {
    id: 13,
    url: picture13,
  },
  {
    id: 14,
    url: picture14,
  },
  {
    id: 15,
    url: picture15,
  },
  {
    id: 16,
    url: picture16,
  },
];

const audio = new Audio(BabyAudio);
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const SAMPLES = 15000;

const App = () => {
  const [muted, setMuted] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openCarousel, setOpenCarousel] = useState(false);
  const [carouselImageIndex, setCarouselImageIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [audioAmplitude, setAudioAmplitude] = useState();
  const [logoScale, setLogoScale] = useState(1);

  useEffect(() => {
    const filterData = (audioBuffer) => {
      const rawData = audioBuffer.getChannelData(0);
      const blockSize = Math.floor(rawData.length / SAMPLES);
      const filteredData = [];
      for (let i = 0; i < SAMPLES; i++) {
        let blockStart = blockSize * i;
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum = sum + Math.abs(rawData[blockStart + j]);
        }
        filteredData.push(sum / blockSize);
      }
      return filteredData;
    };

    const normalizeData = (filteredData) => {
      const multiplier = Math.pow(Math.max(...filteredData), -1);
      return filteredData.map((n) => n * multiplier);
    };

    const loadAudio = async () => {
      const response = await fetch(BabyAudio);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      setAudioAmplitude(normalizeData(filterData(audioBuffer)));
    };

    loadAudio();
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".home-content", {
      duration: 1000,
      distance: "100px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".big-logo-container", {
      delay: 500,
      duration: 1000,
      distance: "100px",
      origin: "top",
    });
    ScrollReveal().reveal(".shei-img", {
      delay: 500,
      duration: 1000,
      distance: "100px",
      origin: "top",
    });

    ScrollReveal().reveal(".lastest-music", {
      duration: 1500,
      distance: "200px",
      origin: "bottom",
    });

    ScrollReveal().reveal(".tours-list", {
      duration: 1500,
      distance: "100px",
      origin: "left",
    });
    ScrollReveal().reveal(".shei-show", {
      duration: 1500,
      distance: "100px",
      origin: "right",
    });

    ScrollReveal().reveal(".contact", {
      duration: 1500,
      distance: "100px",
      origin: "top",
    });

    ScrollReveal().reveal(".footer-social", {
      duration: 1500,
      distance: "100px",
      origin: "bottom",
    });
  }, []);

  useEffect(() => {
    if (audioAmplitude === undefined) return;

    audio.muted = true;
    audio.loop = true;
    audio.volume = 0.2;

    const playListener = () => {
      audio.muted = false;
      setMuted(false);
      setPlay(true);
    };

    const pauseListener = () => {
      setPlay(false);
      setLogoScale(1);
    };

    const update = () => {
      if (audio.paused) return;
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const progress = currentTime / duration;
      const amplitude = audioAmplitude[Math.floor(progress * SAMPLES)];
      let newScale = 0.9 + amplitude;
      if (newScale < 1) {
        newScale = 1;
      } else if (newScale > 1.3) {
        newScale = 1.3;
      }
      setLogoScale(newScale);
    };

    const updateID = setInterval(update, 100);

    audio.addEventListener("play", playListener);
    audio.addEventListener("pause", pauseListener);

    return () => {
      clearInterval(updateID);
      audio.removeEventListener("play", playListener);
      audio.removeEventListener("pause", pauseListener);
    };
  }, [audioAmplitude]);

  const playMusic = () => {
    audio.play();
  };

  const pauseMusic = () => {
    audio.pause();
  };

  const stopMusic = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const muteMusic = () => {
    audio.muted = true;
    setMuted(true);
  };

  const unmuteMusic = () => {
    audio.muted = false;
    setMuted(false);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Logo onClick={() => scrollToElement("home")} className="logo-svg" />
        </div>
        <Menu className="menu-icon" onClick={() => setOpenMobileMenu(true)} />
        <nav
          className="menu-mobile"
          onClick={() => setOpenMobileMenu(false)}
          style={{
            width: openMobileMenu ? "100vw" : "0",
          }}
        >
          <p onClick={() => scrollToElement("home")}>Home</p>
          <p onClick={() => scrollToElement("lastest-music")}>Musica</p>
          <p onClick={() => scrollToElement("tours-dates")}>Eventos</p>
          <p onClick={() => scrollToElement("photos")}>Fotos</p>
          <p onClick={() => scrollToElement("contact")}>Contacto</p>
        </nav>
        <nav className="menu">
          <ul>
            <li>
              <span onClick={() => scrollToElement("home")}>Home</span>
            </li>
            <li>
              <span onClick={() => scrollToElement("lastest-music")}>
                Musica
              </span>
            </li>
            <li>
              <span onClick={() => scrollToElement("tours-dates")}>
                Eventos
              </span>
            </li>
            <li>
              <span onClick={() => scrollToElement("photos")}>Fotos</span>
            </li>
            <li>
              <span onClick={() => scrollToElement("contact")}>Contacto</span>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" className="section home">
        <div className="home-content">
          <img className="shei-img" src={sheiFull} alt="shei" />
          <div className="big-logo-container">
            <Logo
              className="home-logo"
              style={{
                transform: "scale(" + logoScale + ")",
              }}
            />
            <div className="player-controls">
              <StopIcon className="icon" onClick={stopMusic} />
              {play ? (
                <PauseIcon onClick={pauseMusic} className="icon" />
              ) : (
                <PlayIcon onClick={playMusic} className="icon" />
              )}
              {muted ? (
                <VolumeOff onClick={unmuteMusic} className="white-stroke" />
              ) : (
                <VolumeOn onClick={muteMusic} className="white-stroke" />
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="lastest-music" className="section lastest-music">
        <h2 className="section-title">Ultimos lanzamientos</h2>
        <div className="songs-grid">
          {last_songs.map((song) => (
            <SongCard key={"song-" + song.id} {...song} />
          ))}
        </div>
      </section>
      <section id="tours-dates" className="section tours-dates">
        <h2 className="section-title">Proximas fechas</h2>
        <div className="tours-wrapper">
          <div className="tours-list">
            {tour_dates.map((tour) => (
              <TourRow key={"tour-" + tour.id} {...tour} />
            ))}
          </div>
          <img className="shei-show" alt="show" src={sheiShow} />
        </div>
      </section>
      <section id="photos" className="section photos">
        <div className="photos-header">
          <h2 className="section-title">Fotos</h2>
        </div>
        <div className="photos-grid">
          {[0, 1, 2, 3].map((column) => (
            <div key={"column-" + column} className="photos-column">
              {[0, 1, 2, 3].map((row) => {
                const imageIndex = column * 4 + row;
                const picture = pictures[imageIndex];
                return (
                  <img
                    onClick={() => {
                      setOpenCarousel(true);
                      setCarouselImageIndex(imageIndex);
                    }}
                    key={"photo-" + picture.id}
                    className="photos-image"
                    src={picture.url}
                  />
                );
              })}
            </div>
          ))}
        </div>
        {openCarousel ? (
          <InspectCarrousel
            onClose={() => setOpenCarousel(false)}
            selectedImage={carouselImageIndex}
            images={pictures}
          />
        ) : null}
      </section>
      <section id="contact" className="section contact">
        <h2 className="section-title">Contacto</h2>
        <h4 className="section-subtitle">Escribeme a mi y a mi equipo</h4>
        <form className="contact-form">
          <div className="name-row">
            <div className="contact-textfield">
              <label>Nombre(s)</label>
              <input type="text" />
            </div>
          </div>
          <div className="lastname-row">
            <div className="contact-textfield">
              <label>Apellidos</label>
              <input type="text" />
            </div>
          </div>
          <div className="email-row">
            <div className="contact-textfield">
              <label>Correo</label>
              <input type="email" />
            </div>
          </div>
          <div className="message-row">
            <div className="contact-textfield">
              <label>Mensaje</label>
              <textarea />
            </div>
          </div>
          <div className="button-row">
            <button className="send-button" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </section>
      <footer className="footer">
        <div className="footer-social">
          <h4>Sigueme</h4>
          <div className="social-container">
            <a
              href="https://open.spotify.com/intl-es/artist/2ZxBc8Sr2EFhevvNDZqRO6?si=vNpSDAhTQZmKZcdrNMn7Tg&nd=1"
              target="_blank"
              rel="noreferrer"
            >
              <Spotify className="social-icon" />
            </a>
            <a
              href="https://music.apple.com/mx/artist/shei/480703906"
              target="_blank"
              rel="noreferrer"
            >
              <Apple className="social-icon" />
            </a>
            <a
              href="https://music.amazon.com.mx/artists/B006CIQTV8/shei"
              target="_blank"
              rel="noreferrer"
            >
              <Amazon className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/sheidjofficial"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/SheiDJOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="social-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@sheiofficial"
              target="_blank"
              rel="noreferrer"
            >
              <Tiktok className="social-icon" />
            </a>
            <a
              href="https://twitter.com/SheiDjOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="social-icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZzRJyXKutlFvIQSbMfRumA"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <Logo className="footer-logo" />
          <div className="legals">
            <span>© 2023 Shei</span>
            <span>Politica de privacidad</span>
            <span>Terminos y condiciones</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
