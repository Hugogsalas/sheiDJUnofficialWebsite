import PropTypes from "prop-types";
import "./TourRow.css";

const TourRow = ({ city, country, place, event, date }) => {
  return (
    <div className="tour-row">
      <div className="tour-cell">
        <div className="tour-info">
          <h4>{date}</h4>
          <h2>{event}</h2>
          <p>
            {city}
            {", "}
            {country}
          </p>
          <p>{place}</p>
        </div>
        <div className="tour-button-container">
          <button className="tour-button">Get Tickets</button>
        </div>
      </div>
    </div>
  );
};

TourRow.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  place: PropTypes.string,
  event: PropTypes.string,
  date: PropTypes.string,
};

export default TourRow;
