import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 150px;
`;
export const HeroTittle = styled.p`
  margin-top: 100px;
  font-size: 224px;
  text-transform: uppercase;
  /* align-items: center; */
  display: flex;
  justify-content: center;
  font-family: Raleway;
`;

export const HeroText = styled.p`
  width: 644px;
  font-size: 24px;
  font-family: Raleway;
  margin-left: auto;
  margin-bottom: 65px;
`;

export const HeroWrap = styled.div`
  position: relative;
  align-items: center;
`;

export const HeroButton = styled.button`
  position: absolute;
  background-color: #1d1d1d;
  border: 15px solid #f8f8f8;

  color: #f8f8f8;
  width: 286px;
  height: 286px;
  border-radius: 200px;
  z-index: 11;
  top: -16%;
  left: 46%;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.7s, color 0.7s;

  &:hover {
    border: 15px solid #1d1d1d;
    background-color: #f8f8f8;
    color: #1d1d1d;
  }
`;

export const HeroImg = styled.img`
  filter: grayscale(100%);
  object-fit: cover;
  height: 859px;
`;
