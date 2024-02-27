import Container from "../Container/Containerl";
import { AccordionWpapper, Title } from "./Stages.styled";
import Accordion from "../Accordion/Accordion";

const Stages = () => {
  return (
    <Container>
      <Title>Етапи будівництва</Title>
      <AccordionWpapper>
        <div>
          <Accordion title="Вибір технології" number="/01">
            <p>
              Будівельна компанія котеджів "Eco House" з розумінням ставиться до
              вибору клієнта. Співробітники в деталях опишуть переваги і
              недоліки кожної технології, врахують геологічне розташування
              ділянки, фізико-хімічні характеристики матеріалів та ін. деталі.
            </p>
          </Accordion>
          <Accordion title="Підбір або створення проекту" number="/02">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos tempore doloribus molestias id amet soluta sunt
              consequatur! Quas, nam!
            </p>
          </Accordion>
          <Accordion title="Підписання договору" number="/03">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos tempore doloribus molestias id amet soluta sunt
              consequatur! Quas, nam!
            </p>
          </Accordion>
          <Accordion title="Оформлення дозволів" number="/04">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos tempore doloribus molestias id amet soluta sunt
              consequatur! Quas, nam!
            </p>
          </Accordion>
        </div>
        <div>
          <Accordion title="Початок робіт" number="/05">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos tempore doloribus molestias id amet soluta sunt
              consequatur! Quas, nam!
            </p>
          </Accordion>
          <Accordion title="Технагляд і фотозвіт" number="/06">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos tempore doloribus molestias id amet soluta sunt
              consequatur! Quas, nam!
            </p>
          </Accordion>
          <Accordion title="Акт приймання-передачі" number="/07">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos tempore doloribus molestias id amet soluta sunt
              consequatur! Quas, nam!
            </p>
          </Accordion>
          <Accordion title="Передача ключів" number="/08">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos tempore doloribus molestias id amet soluta sunt
              consequatur! Quas, nam!
            </p>
          </Accordion>
        </div>
      </AccordionWpapper>
    </Container>
  );
};

export default Stages;
