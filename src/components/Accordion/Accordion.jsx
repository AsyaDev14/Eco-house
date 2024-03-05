import { useState } from "react";
import {
  DetailsRightWrapper,
  DetailsWrapper,
  OpenButton,
  StageWrapper,
  Wrapper,
} from "./Accordion.styled";

const Accordion = ({ number, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <StageWrapper>
        <p>/0{number}</p>
        <h4>{title}</h4>
        <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
      </StageWrapper>
      {isOpen &&
        (number < 5 ? (
          <DetailsWrapper>
            <p>/0{number}</p>
            <h4>{title}</h4>
            <p>{text}</p>
            <button onClick={toggleAccordion}>&#10005;</button>
          </DetailsWrapper>
        ) : (
          <DetailsRightWrapper>
            <p>/0{number}</p>
            <h4>{title}</h4>
            <p>{text}</p>
            <button onClick={toggleAccordion}>&#10005;</button>
          </DetailsRightWrapper>
        ))}
    </Wrapper>
  );
};

export default Accordion;
