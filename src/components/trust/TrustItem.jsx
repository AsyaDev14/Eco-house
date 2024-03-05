import React, { useState } from "react";
import {
  Buttons,
  TrustDescript,
  TrustNumber,
  TrustTitle,
  TrustWrapper,
  WrapDiv,
} from "./Trust.styled";

import open from "../../images/icons/chevron-down.png";
import close from "../../images/icons/close.png";

const TrustItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { number, title, text } = props;
  console.log(isClicked);
  return (
    <>
      {isClicked ? (
        <TrustWrapper $bgc="#F8F8F8">
          <WrapDiv>
            <TrustNumber>/{number}</TrustNumber>
            <TrustTitle $col="#1D1D1D">{title}</TrustTitle>
          </WrapDiv>
          <TrustDescript>{text}</TrustDescript>
          <Buttons
            type="button"
            onClick={() => setIsClicked(!isClicked)}
            $bgc="#1D1D1D"
          >
            <img src={close} alt="close" />
          </Buttons>
        </TrustWrapper>
      ) : (
        <TrustWrapper $bgc="transparent">
          <WrapDiv>
            <TrustNumber>/{number}</TrustNumber>
            <TrustTitle $col="#F8F8F8">{title}</TrustTitle>
          </WrapDiv>
          <Buttons type="button" onClick={() => setIsClicked(!isClicked)}>
            <img src={open} alt="open" />
          </Buttons>
        </TrustWrapper>
      )}
    </>
  );
};

export default TrustItem;
