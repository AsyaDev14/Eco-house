import React from "react";
import Container from "../Container/Container";
import {
  ImgWrapper,
  OffersBuild,
  OffersButton,
  OffersDescription,
  OffersSubTit,
  OffersTittle,
  OffersWrapper,
  TextWrapper,
} from "./Offers.styled";
import offer1 from "../../images/offers/offer1.jpg";
import offer2 from "../../images/offers/offer2.jpg";
import offer3 from "../../images/offers/offer3.jpg";
import offer4 from "../../images/offers/offer4.jpg";
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
          <TextWrapper>
            <OffersDescription>
              Пропонуємо будівництво будинків за новими і класичними
              технологіями, з екологічно безпечних і надійних матеріалів, які на
              практиці довели доцільність свого застосування.
            </OffersDescription>
            <OffersDescription>
              Наш досвід дозволяє запропонувати реалізацію складних,
              індивідуальних проектів, будівництво будинку з преміальним
              екстер'єром, неповторними архітектурними лініями.
            </OffersDescription>
          </TextWrapper>
          <ImgWrapper>
            <img src={offer1} alt="house" />
            <img src={offer2} alt="protaction" height="305px" />
            <OffersButton type="button">детальніше</OffersButton>
          </ImgWrapper>
        </div>
      </OffersWrapper>
      {/* another  */}
      <OffersWrapper>
        <OffersSubTit>
          Результат нашої роботи перевершить ваші очікування!
        </OffersSubTit>
        <div>
          <OffersBuild>
            Будівництво приватних <br />
            будинків в Kиєві
          </OffersBuild>
          <TextWrapper>
            <OffersDescription>
              Чи плануєте будівництво будинку в Києві , але не знаєте з чого
              почати? Зателефонуйте в нашу фірму. Досвідчені фахівці знають як
              побудувати будинок вашої мрії, з чого почати будівництво
              невеликого об'єкта і реалізацію великомасштабного проекту.
            </OffersDescription>
            <OffersDescription>
              "Eco-House" займається будівництвом будинків в Київській області з
              цегли і газобетону. Ми - один з небагатьох підрядників на ринку
              області, який спеціалізується на еко- будівництві. У нашу
              компетенцію також входить зведення якісної і безпечної каркасної
              нерухомості.
            </OffersDescription>
          </TextWrapper>
          <ImgWrapper>
            <img src={offer3} alt="house" />
            <img src={offer4} alt="architect" height="305px" />
            <OffersButton
              type="button"
              $col="#1d1d1d"
              $bgc="#f8f8f8"
              $hovcol="#fbfbfb"
              $hovbgc="transparent"
              $bord="1px solid #f8f8f8"
            >
              контакти
            </OffersButton>
          </ImgWrapper>
        </div>
      </OffersWrapper>
    </Container>
  );
};

export default Offers;
