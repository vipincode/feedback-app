import React from 'react';
import {
  Header,
  FeedbackList,
  FeedbackStats,
  FeedbackForm,
} from '../components';
import FeedbackData from '../data/FeedbackData';
import { container } from '../style/MainStyle';

type feedbackProps = {
  id: number;
  rating: number;
  text: string;
};

const Home = () => {
  const [feedback, setFeedback] = React.useState(FeedbackData);

  const deleteFeedback = (id: any) => {
    if (window.confirm('Are you sure want to delete?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div css={container}>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default Home;
