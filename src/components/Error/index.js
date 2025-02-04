import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes
const scan = keyframes`
  0% { background-position: 0 -100vh; }
  35%, 100% { background-position: 0 100vh; }
`;

// Define styled components
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Noise = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: .02;
`;

const Overlay = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: auto 4px;
  z-index: 1;

  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      transparent 0%,
      rgba(32, 128, 32, 0.2) 2%,
      rgba(32, 128, 32, 0.8) 3%,
      rgba(32, 128, 32, 0.2) 3%,
      transparent 100%
    );
    background-repeat: no-repeat;
    animation: ${scan} 7.5s linear 0s infinite;
  }
`;

const Terminal = styled.div`
  box-sizing: inherit;
  position: absolute;
  height: 100%;
  width: 1000px;
  max-width: 100%;
  padding: 4rem;
  text-transform: uppercase;
`;

const Output = styled.p`
  color: rgba(128, 255, 128, 0.8);
  text-shadow:
    0 0 1px rgba(51, 255, 51, 0.4),
    0 0 2px rgba(255, 255, 255, 0.8);

  &::before {
    content: "> ";
  }
`;

const ErrorCode = styled.span`
  color: white;
`;

// Component
function NotFoundPage() {
  return (
    <Container>
      <Noise className="noise" />
      <Overlay className="overlay" />
      <Terminal className="terminal">
        <h1>Error <ErrorCode>404</ErrorCode></h1>
        <Output>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</Output>
        <Output>Please try to <a href="#1">go back</a> or <a href="#2">return to the homepage</a>.</Output>
        <Output>Good luck.</Output>
      </Terminal>
    </Container>
  );
}

export default NotFoundPage;
