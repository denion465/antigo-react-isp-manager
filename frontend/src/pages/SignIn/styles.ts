// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { shade } from 'polished';

import SignInBackground from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 800px;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  a {
    color: #001d50;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    margin-top: 10px;
    align-items: center;

    &:hover {
      color: ${shade(0.4, '#001d50')};
    }
  }

  > a {
    color: #001d50;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: ${shade(0.4, '#001d50')};
    }
  }

  img {
    height: 25%;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackground}) no-repeat center;
  background-size: cover;
`;
