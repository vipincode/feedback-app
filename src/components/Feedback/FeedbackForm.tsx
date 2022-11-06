import React from 'react';
import { Button, feedFrom } from './FeedbackStyle';

export const FeedbackForm = () => {
  const [text, setText] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [message, setMessage] = React.useState<string | null>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters!');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  return (
    <div css={feedFrom}>
      <h4>How you would rate your service with us?</h4>
      {/* @todo: rating select component */}
      <div className="form-field">
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="Write a review"
        />
        <Button disabled={btnDisabled}>Send</Button>
      </div>
      {message && <p style={pText}>{message}</p>}
    </div>
  );
};

const pText = {
  fontSize: '12px',
  marginTop: '12px',
  letterSpacing: '1px',
  fontWeight: '300',
  color: '#fc427b',
};

// @Continue lec: 21
