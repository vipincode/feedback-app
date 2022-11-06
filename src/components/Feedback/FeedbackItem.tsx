import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { card, Button } from './FeedbackStyle';

type feedbackProps = {
  id: number;
  rating: number;
  text: string;
};

export const FeedbackItem: React.FC<{
  item: feedbackProps;
  handleDelete: any;
}> = ({ item, handleDelete }) => {
  return (
    <div css={card}>
      <div className="card_close">
        <button className="close" onClick={() => handleDelete(item.id)}>
          <FaTimes />
        </button>
      </div>
      <div className="card_display">{item.rating}</div>
      <div className="card_text">{item.text}</div>
    </div>
  );
};
