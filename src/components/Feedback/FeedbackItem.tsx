import React from 'react';
import { card, Button } from './FeedbackStyle';

export const FeedbackItem = () => {
  const [rating, setRating] = React.useState(7);
  const [text, setText] = React.useState(
    'This is an example of feedback items'
  );
  const handleIncrement = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };
  return (
    <div css={card}>
      <div className="card_display">{rating}</div>
      <div className="card_text">{text}</div>
      <Button onClick={handleIncrement}>Click</Button>
    </div>
  );
};
