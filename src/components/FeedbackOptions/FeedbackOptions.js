import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function Feedback({ handleFeedback }) {
  return (
    <div className={styles.feedback}>
      <button
        type="button"
        name="good"
        className={styles.btn}
        onClick={handleFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={styles.btn}
        onClick={handleFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={styles.btn}
        onClick={handleFeedback}
      >
        Bad
      </button>
    </div>
  );
}

Feedback.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};

export default Feedback;
