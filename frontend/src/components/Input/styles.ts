import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #232129;
  padding: 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 100%;

  & + div {
    margin-top: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #001d50;
    &::placeholder {
      color: #001d50;
    }

    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
