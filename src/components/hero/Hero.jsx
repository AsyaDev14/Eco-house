import React from "react";
import hero from "../../images/hero/hero.jpeg";
import Container from "../Container/Containerl";
const Hero = () => {
  return (
    <Container>
      <p>ми-eco house</p>
      <p>
        Спеціалізована фірма "Eco House" - ваш гід на будівельному ринку Києва і
        області. Ми допоможемо втілити ваш будинок мрії у життя, використовуючі
        новітні технології та еко-матеріали найкращої якості.
      </p>
      <div>
        <button type="button">Консультація експерта</button>
        <img src={hero} alt="" />
      </div>
    </Container>
  );
};

export default Hero;
