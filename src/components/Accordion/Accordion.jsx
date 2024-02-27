import { useState } from "react";
import {
  AccordionItem,
  Number,
  StageTitle,
  StageTitleWrapper,
} from "./Accordion.styled";

const Accordion = ({ number, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem>
      <div className={`accordion ${isOpen ? "active" : ""}`}>
        <div
          className={`accordion-header ${isOpen ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <StageTitleWrapper>
            <Number>{number}</Number>
            <StageTitle>{title}</StageTitle>
          </StageTitleWrapper>
          <span>{isOpen ? "X" : "Детальніше"}</span>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <p>{children}</p>
          </div>
        )}
      </div>
    </AccordionItem>
  );
};

export default Accordion;
