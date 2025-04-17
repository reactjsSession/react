import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarDisplay = ({ rating = 0, totalStars = 5 }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default StarDisplay;