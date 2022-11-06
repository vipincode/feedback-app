import React from 'react';
import { FeedbackItem } from './FeedbackItem';
import { feedBack } from './FeedbackStyle';

type feedbackProps = {
  id: number;
  rating: number;
  text: string;
};

export const FeedbackList: React.FC<{
  feedback: feedbackProps[];
  handleDelete: any;
}> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length == 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div css={feedBack}>
      <div className="feedback-list">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
