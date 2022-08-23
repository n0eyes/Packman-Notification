import React, { FormEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "/public/assets/svg/logo.svg";
import { packmanColors } from "../../styles/color";
import { FONT_STYLES } from "../../styles/font";
import { useInput } from "../../hooks/useInput";
import { useRegisterNotification } from "../../hooks/queries/notification";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import { lottie } from "../../public/assets";
import Error from "../common/Error";

function Input() {
  const router = useRouter();
  const [value, changeHandler, valid] = useInput("");
  const { mutate, isLoading, error } = useRegisterNotification();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    mutate(value, {
      onSuccess: ({ data: { num } }) =>
        router.replace(`/landing/appreciate/${num}`),
    });
  };

  if (error && error.response.status !== 400) return <Error />;
  if (isLoading) return <Lottie animationData={lottie} />;
  return (
    <StyledRoot>
      <StyledLogo>
        <Image src={Logo} layout="responsive" alt="logo" />
      </StyledLogo>
      <div>
        <StyledDescription>
          팩맨이 출시될 때
          <br />
          가장 먼저 알려드릴게요!
        </StyledDescription>
      </div>
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          value={value}
          onChange={changeHandler}
          placeholder="출시 알림 받을 연락처를 입력해주세요"
        />
        <StyledButton type="submit">제출 완료</StyledButton>
      </StyledForm>
      {!valid && (
        <StyledError>&apos;-&apos;를 포함하여 작성해주세요</StyledError>
      )}
    </StyledRoot>
  );
}

export default Input;

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

const StyledDescription = styled.div`
  text-align: center;

  ${FONT_STYLES.DISPLAY3_EXTRABOLD}
  color: ${packmanColors.black};

  margin-top: 5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 27.3rem;
  height: 4.9rem;

  background-color: ${packmanColors.pmLightGrey};

  outline: none;
  border: none;
  border-radius: 0.8rem;

  ${FONT_STYLES.BODY4_SEMIBOLD}

  margin-top: 2.8rem;
  padding: 0 2.5rem;

  &::placeholder {
    text-align: center;
    ${FONT_STYLES.LANDING3_SEMIBOLD}
  }
`;

const StyledButton = styled.button`
  width: 27.3rem;
  height: 4.9rem;

  color: ${packmanColors.pmWhite};
  background-color: ${packmanColors.pink};

  border: none;
  border-radius: 0.8rem;

  ${FONT_STYLES.BODY4_SEMIBOLD}

  margin-top: 1rem;

  cursor: pointer;
`;

const StyledError = styled.div`
  font-size: 1.4rem;

  color: ${packmanColors.pink};

  margin-top: 1rem;
`;
