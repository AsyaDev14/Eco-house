// import React from "react";
import Container from "../Container/Containerl";
import project1 from "../../images/portfolio/portfolio1.jpg";
import project2 from "../../images/portfolio/portfolio2.jpg";
import project3 from "../../images/portfolio/portfolio3.jpg";
import project4 from "../../images/portfolio/portfolio4.jpg";
import project5 from "../../images/portfolio/portfolio5.jpg";
import project6 from "../../images/portfolio/portfolio6.jpg";
import {
  Button,
  ButtonBuilt,
  Caption,
  PortfolioWrapper1,
  PortfolioWrapper2,
  ProjectWrapper,
  Title,
} from "./Portfolio.styled";

const Portfolio = () => {
  return (
    <Container>
      <Title>Портфоліо</Title>
      <hr />
      <PortfolioWrapper1>
        <ProjectWrapper>
          <img src={project1} alt="Project 1" width={425} height={458} />
          <Caption>Індивідуальний проект будинку в Кулібабі</Caption>
        </ProjectWrapper>
        <ProjectWrapper>
          <img src={project2} alt="Project 2" width={425} height={458} />
          <Caption>Проєкт будинку Осиково</Caption>
        </ProjectWrapper>
        <div>
          <img src={project3} alt="Project 3" width={870} height={959} />
          <Caption>Індивідуальний проект будинку Осикове</Caption>
        </div>
        <Button>Записатись на перегляд будівництва</Button>
      </PortfolioWrapper1>
      <PortfolioWrapper2>
        <div>
          <img src={project4} alt="Project 4" width={870} height={937} />
          <Caption>Індивідуальний проект будинку Осикове</Caption>
        </div>
        <ProjectWrapper>
          <img src={project5} alt="Project 5" width={425} height={458} />
          <Caption>Проект будинку Проців</Caption>
        </ProjectWrapper>
        <ProjectWrapper>
          <img src={project6} alt="Project 6" width={425} height={458} />
          <Caption>Проєкт будинку Хотянівка</Caption>
        </ProjectWrapper>
        <ButtonBuilt>Побудовані будинки</ButtonBuilt>
      </PortfolioWrapper2>
    </Container>
  );
};

export default Portfolio;
