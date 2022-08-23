import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import { lottie } from "../../public/assets";

function Loading() {
  return (
    <StyledRoot>
      <Lottie
        animationData={lottie}
        style={{ width: "100%", height: "100%" }}
      />
    </StyledRoot>
  );
}

export default Loading;

const StyledRoot = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
`;
