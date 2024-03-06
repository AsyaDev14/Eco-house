// import React from "react";
import logo from "../../images/hero/logo.png";
import Container from "../Container/Container";
import {
  ContactsWrapper,
  Copyright,
  FooterWrapper,
  PartWrapper,
  ServicesWrapper,
  Title,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Container>
      <hr />
      <FooterWrapper>
        <a href="/index.html">
          <img src={logo} alt="Logo" />
        </a>
        <PartWrapper>
          <Title>Контакти</Title>
          <ContactsWrapper>
            <p>
              Україна, Київ, Печерський р-н,
              <br />
              вул. Князів Острозьких 43
            </p>
            <p>Індекс: 01133</p>
            <p>Графік роботи: ПН-ПТ 8:00-17:00</p>
            <p>
              <a href="tel:+380445000964">044 500 09 64</a>
              <br />
              <a href="tel:+380970070964">097 007 09 64</a>
            </p>
            <a href="mailto:office@eco-house.kiev.ua">
              office@eco-house.kiev.ua
            </a>
          </ContactsWrapper>
        </PartWrapper>
        <PartWrapper>
          <Title>Послуги</Title>
          <ServicesWrapper>
            <a href="">Індивідуальне проектування</a>
            <a href="">Будівництво котеджів</a>
          </ServicesWrapper>
          <Copyright>
            Будівельна компанія Еко-Дім © 2023 Всі права захищені
          </Copyright>
        </PartWrapper>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
