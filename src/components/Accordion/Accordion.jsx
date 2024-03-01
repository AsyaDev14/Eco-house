import { useState } from "react";
import // AccordionItem,
// Number,
// StageTitle,
// StageTitleWrapper,
"./Accordion.styled";
import {
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
        <p>/{number}</p>
        <h4>{title}</h4>
        <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
      </StageWrapper>
      {isOpen && (
        <DetailsWrapper>
          <p>/{number}</p>
          <h4>{title}</h4>
          <p>{text}</p>
          <button onClick={toggleAccordion}>&#10005;</button>
        </DetailsWrapper>
      )}
    </Wrapper>
  );
};

export default Accordion;
