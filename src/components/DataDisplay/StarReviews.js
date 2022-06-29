import React, { useState } from 'react';
import { StarOutline, Star } from 'react-ionicons';
// import { Rating } from "react-simple-star-rating";

const StarReviews = () => {
  const [rating, setRating] = useState(0); // initial rating
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div className='flex items-center gap-1'>
      <Star height='14px' width='14px' color='#E84414' />
      <Star height='14px' width='14px' color='#E84414' />
      <Star height='14px' width='14px' color='#E84414' />
      <Star height='14px' width='14px' color='#E84414' />
      <StarOutline height='' width='14px' color='#E84414' />
    </div>
  );
};

export default StarReviews;
