import React from 'react';
import { feedStats } from './FeedbackStyle';

type feedbackProps = {
  id: number;
  rating: number;
  text: string;
};

export const FeedbackStats: React.FC<{ feedback: feedbackProps[] }> = ({
  feedback,
}) => {
  let total = feedback.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);

  let average = total / feedback.length;
  average = +average.toFixed(1).replace(/[.,]0$/, '');
  // average = Number(average.toFixed(1).replace(/[.,]0$/, ''));

  console.log(average);
  return (
    <div css={feedStats}>
      <div>{feedback.length} Reviews</div>
      <div>Average Rating: {isNaN(average) ? 0 : average}</div>
    </div>
  );
};
