import React from 'react';
import './Result.css'; // Add CSS for styling

const Result = () => {
  return (
    <div className="result-container">
      <div className="congrats">
        <svg
          width="100"
          height="100"
          viewBox="0 0 16 16"
          className="bi bi-check-circle-fill"
          fill="green"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm-.293 10.293a.5.5 0 0 0 .708 0L11 9.707l1.293 1.293a.5.5 0 0 0 .708-.708L11.707 9l1.293-1.293a.5.5 0 1 0-.708-.708L11 8.293 9.707 7 8.414 8.293a.5.5 0 0 0 0 .708z"
          />
        </svg>
        <h2>Congratulations!</h2>
      </div>
      <p>Your data has been successfully submitted.</p>
    </div>
  );
};

export default Result;
