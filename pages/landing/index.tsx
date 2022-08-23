import React, { useState } from "react";
import LandingBg from "../../components/landing/common/LandingBg";
import Input from "../../components/landing/Input";
import Intro from "../../components/landing/Intro";

function Landing() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => setClicked(true);

  return (
    <LandingBg>
      {clicked ? <Input /> : <Intro clickHandler={clickHandler} />}
    </LandingBg>
  );
}

export default Landing;
