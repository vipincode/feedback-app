import { Global } from '@emotion/react';
import Home from './pages/Home';
import { CSSReset } from './utils/Global';

const App = () => {
  return (
    <>
      <Global styles={CSSReset} />
      <Home />
    </>
  );
};

export default App;
