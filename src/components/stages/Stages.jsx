import { useState } from "react";
import Container from "../Container/Container";
import {
  OpenButton,
  DetailsWrapper,
  PairWpapper,
  StageWrapper,
  Title,
} from "./Stages.styled";
// import Accordion from "../Accordion/Accordion";
// AccordionWpapper,

const Stages = () => {
  // const data = [
  //   { id: "01", title: "Вибір технології", text: "" },
  //   {
  //     id: "02",
  //     title: "Підбір або створення проекту",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
  //   },
  //   {
  //     id: "03",
  //     title: "Підбір або створення проекту",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
  //   },
  //   {
  //     id: "04",
  //     title: "Підбір або створення проекту",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
  //   },
  //   {
  //     id: "05",
  //     title: "Підбір або створення проекту",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
  //   },
  //   {
  //     id: "06",
  //     title: "Підбір або створення проекту",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
  //   },
  //   {
  //     id: "07",
  //     title: "Підбір або створення проекту",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
  //   },
  //   {
  //     id: "08",
  //     title: "Підбір або створення проекту",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
  //   },
  // ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Title>Етапи будівництва</Title>
      <div>
        {isOpen ? (
          <DetailsWrapper>
            <p>/01</p>
            <h4>Вибір технології</h4>
            <p>
              Будівельна компанія котеджів Eco House з розумінням ставиться до
              вибору клієнта. Співробітники в деталях опишуть переваги і
              недоліки кожної технології, врахують геологічне розташування
              ділянки, фізико-хімічні характеристики матеріалів та ін. деталі.
            </p>
            <button onClick={toggleAccordion}>X</button>
          </DetailsWrapper>
        ) : (
          <PairWpapper>
            <StageWrapper>
              <p>/01</p>
              <h4>Вибір технології</h4>
              <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
            </StageWrapper>
            <StageWrapper>
              <p>/05</p>
              <h4>Початок робіт</h4>
              <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
            </StageWrapper>
          </PairWpapper>
        )}
        <PairWpapper>
          <StageWrapper>
            <p>/02</p>
            <h4>Підбір або створення проекту</h4>
            <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
          </StageWrapper>
          <StageWrapper>
            <p>/06</p>
            <h4>Технагляд і фотозвіт</h4>
            <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
          </StageWrapper>
        </PairWpapper>
        <PairWpapper>
          <StageWrapper>
            <p>/03</p>
            <h4>Підписання договору</h4>
            <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
          </StageWrapper>
          <StageWrapper>
            <p>/07</p>
            <h4>Акт приймання-передачі</h4>
            <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
          </StageWrapper>
        </PairWpapper>
        <PairWpapper>
          <StageWrapper>
            <p>/04</p>
            <h4>Оформлення дозволів</h4>
            <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
          </StageWrapper>
          <StageWrapper>
            <p>/08</p>
            <h4>Передача ключів</h4>
            <OpenButton onClick={toggleAccordion}>Детальніше</OpenButton>
          </StageWrapper>
        </PairWpapper>
      </div>
    </Container>
  );
};

export default Stages;
