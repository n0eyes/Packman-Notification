import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";

interface LandingBg {
  children?: ReactNode;
}

function LandingBg({ children }: LandingBg) {
  useEffect(() => {
    if (window) {
      alert(window.innerWidth);
    }
  }, []);

  return <StyledRoot>{children}</StyledRoot>;
}

export default LandingBg;

const StyledRoot = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  position: relative;

  background-image: url("/assets/png/landing-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
`;
