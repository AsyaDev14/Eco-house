import styled from "styled-components";

export const Title = styled.h2`
  font-size: 100px;
  font-weight: 400;

  text-transform: uppercase;
  text-align: left;
`;

export const PortfolioWrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  margin-bottom: 120px;
  padding-top: 80px;
`;

export const PortfolioWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  position: relative;
  padding-bottom: 150px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;

  background-color: transparent;
  border: 1px solid #f8f8f8;
  border-radius: 50%;
  width: 229px;
  height: 229px;
  padding: 20px;

  position: absolute;
  bottom: 0;
  left: 0;

  &:hover,
  &:active {
    color: #1d1d1d;
    background-color: #f8f8f8;
    border: none;
  }
`;

export const ButtonBuilt = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;

  background-color: transparent;
  border: 1px solid #f8f8f8;
  border-radius: 50%;
  width: 229px;
  height: 229px;
  padding: 10px;

  position: absolute;
  top: 0;
  right: 7px;

  &:hover,
  &:active {
    color: #1d1d1d;
    background-color: #f8f8f8;
    border: none;
  }
`;

export const ProjectWrapper = styled.div`
  width: 425px;
`;

export const Caption = styled.p`
  color: #858585;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;
`;
