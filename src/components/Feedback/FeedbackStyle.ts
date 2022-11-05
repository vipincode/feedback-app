import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const card = css`
  background-color: #fff;
  color: #333;
  border-radius: 11px;
  padding: 42px;
  position: relative;
  .card {
    &_display {
      position: absolute;
      left: -14px;
      top: -14px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      line-height: 52px;
      text-align: center;
      background-color: #fc427b;
      color: #fff;
      border: 2px solid #fff;
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
`;
