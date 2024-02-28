import React from "react";
import Container from "../Container/Containerl";
import {
  OffersBuild,
  OffersBuildSm,
  OffersSubTit,
  OffersTittle,
  OffersWrapper,
} from "./Offers.styled";

const Offers = () => {
  return (
    <Container>
      <OffersTittle>ми пропонуємо</OffersTittle>
      <OffersWrapper>
        <OffersSubTit>
          Результат нашої роботи перевершить ваші очікування!
        </OffersSubTit>
        <div>
          <OffersBuild>
            Будівництво будинків від <br />
            450$/м
          </OffersBuild>
          <div>
            <OffersBuildSm>
              Пропонуємо будівництво будинків за новими і класичними
              технологіями, з екологічно безпечних і надійних матеріалів, які на
              практиці довели доцільність свого застосування.
            </OffersBuildSm>
            <OffersBuildSm>
              Наш досвід дозволяє запропонувати реалізацію складних,
              індивідуальних проектів, будівництво будинку з преміальним
              екстер'єром, неповторними архітектурними лініями.
            </OffersBuildSm>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <button type="button">детальніше</button>
          </div>
        </div>
      </OffersWrapper>
    </Container>
  );
};

export default Offers;
