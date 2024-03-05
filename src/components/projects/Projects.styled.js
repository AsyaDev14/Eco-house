import styled from "styled-components";

export const Title = styled.h2`
  text-align: left;
  text-transform: uppercase;
  font-size: 100px;
  font-weight: 400;

  @media only screen and (max-width: 767px) {
    font-size: 44px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 100px;
  padding-bottom: 150px;
`;

export const Subtitle = styled.h3`
  font-size: 80px;
  font-weight: 400;
  line-height: 1;
  padding-bottom: 60px;
  margin: 0;
  text-align: left;

  @media only screen and (max-width: 767px) {
    font-size: 30px;
    padding-bottom: 36px;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  gap: 21px;

  padding-bottom: 60px;

  /* p {
    width: 573px;
    text-align: left;
  } */

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap: 38px;

    padding-bottom: 125px;

    p {
      width: 100%;
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: end;
  gap: 20px;
`;

export const SecondImage = styled.img`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const AdvantageText = styled.p`
  color: #858585;
  font-size: 22px;
  font-weight: 400;

  padding: 140px 70px 0 0;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 400;

  width: 573px;

  @media only screen and (max-width: 767px) {
    font-size: 16px;
    padding-bottom: 36px;
  }
`;

export const TypicalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #f8f8f8;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 500;

  background-color: transparent;
  border: 1px solid #f8f8f8;
  border-radius: 50%;
  width: 229px;
  height: 229px;

  padding: 10px;

  position: absolute;
  top: 0;
  right: 0;

  transition: all 0.7s ease-in-out;

  &:hover,
  &:active {
    color: #1d1d1d;
    background-color: #f8f8f8;
    border: none;
  }

  @media only screen and (max-width: 767px) {
    top: -20%;
    right: 10%;

    background-color: #1d1d1d;
    margin: 5px;
  }
`;

export const IndividualButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #1d1d1d;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  background-color: #f8f8f8;
  border: none;
  border-radius: 50%;
  width: 229px;
  height: 229px;

  padding: 0;

  position: absolute;
  top: 0;
  right: 0;

  transition: all 0.7s ease-in-out;

  &:hover,
  &:active {
    color: #fbfbfb;
    background-color: transparent;
    border: 1px solid #f8f8f8;
  }
`;
