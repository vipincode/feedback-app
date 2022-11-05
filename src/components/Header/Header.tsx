import { container } from '../../style/MainStyle';
import { header } from './HeaderStyle';

export const Header = () => {
  return (
    <header css={header}>
      <div css={container}>
        <h2>Feedback UI</h2>
      </div>
    </header>
  );
};
