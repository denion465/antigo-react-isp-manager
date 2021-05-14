import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background-color: #001d50;
  height: 56px;
  border-radius: 100px;
  padding: 0 16px;
  width: 100%;
  margin-top: 18px;
  border: 0;
  color: #ffffff;
  font-weight: 500;
  transition: background-color 0.1s;

  &:hover {
    background: ${shade(0.4, '#001d50')};
  }
`;
