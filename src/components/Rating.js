import React from "react";
import PropTypes from "prop-types";

const width = 100;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: "absolute",
    width: `${width}px`,
  },
  starsOuter: {
    overflow: "hidden",
  },
};

const cropWidth = (rating) => {
  return Math.floor((rating * width) / 5);
};

const Rating = (props) => {
  const containerStyle = { width: `${cropWidth(props.rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg"></i>
            <i className="fa fa-star-o fa-lg"></i>
            <i className="fa fa-star-o fa-lg"></i>
            <i className="fa fa-star-o fa-lg"></i>
            <i className="fa fa-star-o fa-lg"></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg"></i>
            <i className="fa fa-star fa-lg"></i>
            <i className="fa fa-star fa-lg"></i>
            <i className="fa fa-star fa-lg"></i>
            <i className="fa fa-star fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
