import React from "react";
import Container from "../Container/Container";
import {
  HeaderBox,
  ImgWrapper,
  NavButton,
  NavLabel,
  NavLink,
  NavList,
  NavSelect,
} from "./Header.styled";
import logo from "../../images/hero/logo.png";
const Header = () => {
  return (
    <Container>
      <HeaderBox>
        <a href="/index.html">
          <ImgWrapper src={logo} alt="" />
        </a>
        <nav>
          <NavList>
            <li>
              <NavLink href="">Технології</NavLink>
            </li>
            <li>
              <NavLink href="#projects">Проекти</NavLink>
            </li>
            <li>
              <NavLink href="">Будівництво</NavLink>
            </li>
            <li>
              <NavLink href="">Послуги</NavLink>
            </li>
            <li>
              <NavLink href="">Відгуки</NavLink>
            </li>
            <li>
              <NavLink href="#portfolio">Портфоліо</NavLink>
            </li>
            <li>
              <NavLabel htmlFor="UA">UA</NavLabel>
              <NavSelect name="UA" id="UA"></NavSelect>
            </li>
            <li>
              <NavButton type="button" id="#contacts">
                контакти
              </NavButton>
            </li>
          </NavList>
        </nav>
      </HeaderBox>
    </Container>
  );
};

export default Header;
