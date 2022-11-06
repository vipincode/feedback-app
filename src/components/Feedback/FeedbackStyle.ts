import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const card = css`
  background-color: #fff;
  color: #333;
  border-radius: 11px;
  font-size: 14px;
  padding: 22px;
  margin-bottom: 25px;
  position: relative;
  .card {
    &_close {
      position: absolute;
      right: 10px;
      top: 5px;
      .close {
        background-color: transparent;
        border: none;
        outline: none;
        color: #fc427b;
        cursor: pointer;
      }
    }
    &_display {
      position: absolute;
      left: -10px;
      top: -8px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 14px;
      line-height: 28px;
      text-align: center;
      background-color: #fc427b;
      color: #fff;
      border: 2px solid #fff;
    }
  }
`;

export const feedBack = css``;
export const feedStats = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const feedFrom = css`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 11px;
  padding: 15px;
  text-align: center;
  .form {
    &-field {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-top: 12px;
      input {
        background-color: #fff;
        border: 2px solid #fff;
        font-size: 15px;
        font-weight: 400;
        padding: 6px 15px;
        border: none;
        outline: none;
        border-radius: 6px;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: #fc427b;
  color: #fff;
  border: 2px solid #fff;
  font-size: 15px;
  font-weight: 400;
  padding: 6px 15px;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
    color: #333;
    cursor: not-allowed;
  }
`;
