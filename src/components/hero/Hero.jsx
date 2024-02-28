import React from "react";
import hero from "../../images/hero/hero.jpeg";
import Container from "../Container/Containerl";
import {
  HeroButton,
  HeroImg,
  HeroText,
  HeroTittle,
  HeroWrap,
  Wrapper,
} from "./Hero.styled";
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <HeroTittle>ми-eco house</HeroTittle>
          <HeroText>
            Спеціалізована фірма "Eco House" - ваш гід на будівельному ринку
            Києва і області. Ми допоможемо втілити ваш будинок мрії у життя,
            використовуючі новітні технології та еко-матеріали найкращої якості.
          </HeroText>
        </div>
        <HeroWrap>
          <HeroButton type="button">
            Консультація
            <br />
            експерта
          </HeroButton>
          <HeroImg src={hero} alt="" />
        </HeroWrap>
      </Wrapper>
    </Container>
  );
};

export default Hero;
