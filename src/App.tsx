import { Global } from '@emotion/react';
import { CSSReset } from './utils/Global';

const App = () => {
  return (
    <>
      <Global styles={CSSReset} />
      <h1>Feedback app</h1>
    </>
  );
};

export default App;
