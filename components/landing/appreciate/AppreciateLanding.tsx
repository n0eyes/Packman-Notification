import React, { useState } from "react";
import LandingBg from "../common/LandingBg";
import styled from "styled-components";
import Image from "next/image";
import Logo from "/public/assets/svg/logo.svg";
import { packmanColors } from "../../../styles/color";
import { FONT_STYLES } from "../../../styles/font";
import { getRandomCharacter } from "../../../utils/getRandomCharacter";
import { useRouter } from "next/router";

function AppreciateLanding() {
  const router = useRouter();
  const [randomCharacter] = useState(getRandomCharacter());

  return router.isReady ? (
    <LandingBg>
      <StyledRoot>
        <StyledLogo>
          <Image src={Logo} layout="responsive" alt="logo" />
        </StyledLogo>
        <StyledCharacter>
          <Image
            src={randomCharacter ?? ""}
            layout="responsive"
            alt="character"
          />
        </StyledCharacter>
        <StyledDescriptionWrapper>
          <StyledDescriptionLine1>
            <StyledOrder>{router.query.order}번째 팩맨</StyledOrder>이
          </StyledDescriptionLine1>
          <StyledDescriptionLine2>
            되신 걸 축하드려요! 🎉
          </StyledDescriptionLine2>
          <StyledSubDescription>
            @ packman__official 을 태그하여 스토리에 올려주세요! 추첨을 통해
            소정의 상품을 드립니다 🎁
          </StyledSubDescription>
        </StyledDescriptionWrapper>
      </StyledRoot>
    </LandingBg>
  ) : null;
}

export default AppreciateLanding;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 27.3rem;

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

const StyledCharacter = styled.div`
  width: 18rem;
  height: 18rem;

  position: relative;

  margin-top: 1.5rem;
`;

const StyledDescriptionWrapper = styled.div`
  margin-top: 3rem;
`;

const StyledOrder = styled.span`
  ${FONT_STYLES.APPRECIATE_LINE1_BOLD}

  border-bottom: 3px solid ${packmanColors.pmBlack};
`;
const StyledDescriptionLine1 = styled.div`
  ${FONT_STYLES.DISPLAY3_EXTRABOLD}
  color: ${packmanColors.black};
`;

const StyledDescriptionLine2 = styled.div`
  width: 100%;
  height: 4rem;

  text-align: center;

  ${FONT_STYLES.APPRECIATE_LINE2_BOLD}
  color: ${packmanColors.black};

  margin-top: 0.5rem;
`;

const StyledSubDescription = styled.div`
  width: 18.9rem;

  ${FONT_STYLES.APPRECIATE_MEDIUM}
  color: ${packmanColors.black};

  margin-top: 1.3rem;
`;
