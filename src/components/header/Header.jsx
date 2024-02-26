import React from "react";
import Container from "../Container/Containerl";
import {
  HeaderBox,
  NavButton,
  NavLink,
  NavList,
  NavSelect,
} from "./Header.styled";
const Header = () => {
  return (
    <Container>
      <HeaderBox>
        <p>
          eco house
          <span>build with love</span>
        </p>
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
              <label htmlFor="UA">UA</label>
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
