import React from "react";

const DaysAgo = ({ reviewDate }) => {
  const today = new Date();
  const reviewDateObj = new Date(reviewDate);

  // Calculate difference in milliseconds
  const diffInMs = today - reviewDateObj;
  
  // Convert milliseconds to days
  const dayCount = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Full days

  let displayText = "";

  if (dayCount < 7) {
    displayText = `${dayCount} day${dayCount > 1 ? "s" : ""} ago`; // Days
  } else if (dayCount >= 7 && dayCount < 28) {
    const weekCount = Math.floor(dayCount / 7);
    displayText = `${weekCount} week${weekCount > 1 ? "s" : ""} ago`; // Weeks
  } else {
    const monthCount = Math.floor(dayCount / 30); // Approximation for month
    displayText = `${monthCount} month${monthCount > 1 ? "s" : ""} ago`; // Months
  }

  return (
    <div className="text-xl font-medium text-gray-700">
      🗓️ <span className="text-blue-600">{displayText}</span>
    </div>
  );
};

export default DaysAgo;