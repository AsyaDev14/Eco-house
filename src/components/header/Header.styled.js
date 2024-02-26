import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const NavLink = styled.a`
  color: #f8f8f8;
  font-family: Raleway;
  font-weight: 400;
  font-size: 24px;
`;

export const NavButton = styled.button`
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
  background-color: transparent;
  color: white;
  width: 184px;
  height: 55px;
  border-radius: 33px;
  border: 1px solid #f8f8f8;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: #f8f8f8;
    color: #1d1d1d;
  }
`;
export const NavSelect = styled.select`
  background: transparent;
  border: none;
  color: white;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
