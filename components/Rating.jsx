import React, { useState } from "react";
import "../css/confictStyle.css";

const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (rate) => {
    const newRating = rate === rating ? 0 : rate;
    setRating(newRating);
    onRate(newRating);
  };

  return (
    <div className="rating">
      <h2>Hãy đánh giá chúng tôi ở đây</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled" : ""}`}
          onClick={() => handleRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
