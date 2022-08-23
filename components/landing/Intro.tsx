import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "/public/assets/svg/logo.svg";
import { packmanColors } from "../../styles/color";
import { FONT_STYLES } from "../../styles/font";

interface IntroProps {
  clickHandler: () => void;
}

function Intro(props: IntroProps) {
  const { clickHandler } = props;

  return (
    <StyledRoot>
      <StyledLogo>
        <Image src={Logo} layout="responsive" alt="logo" />
      </StyledLogo>
      <div>
        <StyledServiceName>
          내 손안
          <br />짐 챙김 도우미, 팩맨
        </StyledServiceName>
        <StyledDescription>
          일상 속 모든 짐을 손쉽게 챙겨보세요!
        </StyledDescription>
      </div>
      <StyledButton onClick={clickHandler}>
        서비스 출시 알림 받아볼래요!
      </StyledButton>
    </StyledRoot>
  );
}

export default Intro;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%);
`;

const StyledLogo = styled.div`
  width: 16.6rem;
  height: 3.15rem;

  position: relative;
`;

const StyledServiceName = styled.div`
  ${FONT_STYLES.DISPLAY3_EXTRABOLD}
  color: ${packmanColors.black};

  margin-top: 7rem;
`;

const StyledDescription = styled.div`
  ${FONT_STYLES.LANDING2_SEMIBOLD}

  text-align: center;

  margin-top: 1.3rem;
`;

const StyledButton = styled.button`
  width: 27.3rem;
  height: 4.9rem;

  color: ${packmanColors.pmWhite};
  background-color: ${packmanColors.pink};

  border: none;
  border-radius: 0.8rem;

  ${FONT_STYLES.BODY4_SEMIBOLD}

  margin-top: 2.9rem;

  cursor: pointer;
`;
