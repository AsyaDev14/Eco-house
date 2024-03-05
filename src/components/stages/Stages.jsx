import Container from "../Container/Container";
import { AllStagesWrapper, Title } from "./Stages.styled";
import Accordion from "../Accordion/Accordion";

const Stages = () => {
  const data = [
    {
      id: 1,
      title: "Вибір технології",
      text: "Будівельна компанія котеджів Eco House з розумінням ставиться до вибору клієнта. Співробітники в деталях опишуть переваги і недоліки кожної технології, врахують геологічне розташування ділянки, фізико-хімічні характеристики матеріалів та ін. деталі.",
    },
    {
      id: 2,
      title: "Підбір або створення проекту",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
    },
    {
      id: 3,
      title: "Підписання договору",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
    },
    {
      id: 4,
      title: "Оформлення дозволів",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
    },
    {
      id: 5,
      title: "Початок робіт",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
    },
    {
      id: 6,
      title: "Технагляд і фотозвіт",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
    },
    {
      id: 7,
      title: "Акт приймання-передачі",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
    },
    {
      id: 8,
      title: "Передача ключів",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci reprehenderit voluptatum temporibus natus! Atque culpa illum iste eos vero, incidunt error aliquam perferendis dignissimos eaque voluptates accusamus cum cumque?",
    },
  ];

  return (
    <Container>
      <Title>Етапи будівництва</Title>
      <AllStagesWrapper>
        {data.map(({ id, title, text }) => {
          return (
            <Accordion
              key={id}
              number={id}
              title={title}
              text={text}
            ></Accordion>
          );
        })}
      </AllStagesWrapper>
    </Container>
  );
};

export default Stages;
