import React from "react";

import project1 from "../../images/projects/project1.jpg";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";
import project4 from "../../images/projects/project4.jpg";
import {
  AdvantageText,
  Description,
  ImgWrapper,
  IndividualButton,
  Subtitle,
  TextWrapper,
  Title,
  TypicalButton,
  Wrapper,
} from "./Projects.styled";
import Container from "../Container/Containerl";

const Projects = () => {
  return (
    <Container>
      <Title>Будинки за проектами</Title>
      <hr />
      <div>
        <Wrapper>
          <AdvantageText>
            Найголовніша перевага типового проекту: скорочення вартості і часу.
          </AdvantageText>
          <div>
            <Subtitle>Типові проекти</Subtitle>
            <TextWrapper>
              <Description>
                Будівництво котеджів в Києві компанія Eco House починає з
                проектної документації. Якщо замовник наполягає на створенні
                індивідуального проекту, фахівці проектного бюро приступлять до
                його розробки.
              </Description>
              <Description>
                Багато клієнтів віддають перевагу готовим рішенням, що значно
                скорочує час і вартість будівництва будинку.
              </Description>
            </TextWrapper>

            <ImgWrapper>
              <img
                src={project1}
                alt="Typical Project 1"
                width={574}
                height={589}
              />
              <img
                src={project2}
                alt="Typical Project 2"
                width={573}
                height={305}
              />
              <TypicalButton>Типові проекти</TypicalButton>
            </ImgWrapper>
          </div>
        </Wrapper>

        <Wrapper>
          <AdvantageText>
            Найголовніша перевага індивідуального проекту: всі деталі
            узгоджуються з замовником.
          </AdvantageText>
          <div>
            <Subtitle>Індивідуальні проекти</Subtitle>
            <TextWrapper>
              <Description>
                Будівництво приватних будинків за індивідуальними проектами
                обходиться дорожче, але замовник отримує можливість реалізувати
                всі свої побажання і вимоги.
              </Description>
              <Description>
                Перевагами індивідуального проекту є те, що кожна детаь
                обговорюється з замовником, все створюється знідно пбажань
                клієнта.
              </Description>
            </TextWrapper>

            <ImgWrapper>
              <img
                src={project3}
                alt="Typical Project 3"
                width={574}
                height={589}
              />
              <img
                src={project4}
                alt="Typical Project 4"
                width={573}
                height={305}
              />
              <IndividualButton>Індивідуальний проект</IndividualButton>
            </ImgWrapper>
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Projects;
