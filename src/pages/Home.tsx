import { Header, FeedbackItem } from '../components';
import { container } from '../style/MainStyle';

const Home = () => {
  return (
    <>
      <Header />
      <div css={container}>
        <FeedbackItem />
      </div>
    </>
  );
};

export default Home;
