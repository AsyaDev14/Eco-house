import React, { useState } from "react";
import {
  TrustDescript,
  TrustNumber,
  TrustTitle,
  TrustWrapper,
} from "./Trust.styled";

const TrustItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { number, title, text } = props;
  console.log(isClicked);
  return (
    <>
      {isClicked ? (
        // clicked one
        <TrustWrapper $bgc="#F8F8F8">
          <div>
            <TrustNumber>/{number}</TrustNumber>
            <TrustTitle $col="#1D1D1D">{title}</TrustTitle>
          </div>
          <TrustDescript>{text}</TrustDescript>
          <button type="button" onClick={() => setIsClicked(!isClicked)}>
            close
          </button>
        </TrustWrapper>
      ) : (
        <TrustWrapper $bgc="transparent">
          <TrustNumber>/{number}</TrustNumber>
          <TrustTitle $col="#F8F8F8">{title}</TrustTitle>
          <button type="button" onClick={() => setIsClicked(!isClicked)}>
            open
          </button>
        </TrustWrapper>
      )}
    </>
  );
};

export default TrustItem;
