import React, { useState } from "react";

const TrustItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { number, title, text } = props;
  console.log(isClicked);
  return (
    <>
      {isClicked ? (
        <div>
          <div>/{number}</div>
          <div>{title}</div>
          <div>{text}</div>
          <button type="button" onClick={() => setIsClicked(!isClicked)}>
            close
          </button>
        </div>
      ) : (
        <div>
          <div>/{number}</div>
          <div>{title}</div>
          <button type="button" onClick={() => setIsClicked(!isClicked)}>
            open
          </button>
        </div>
      )}
    </>
  );
};

export default TrustItem;
