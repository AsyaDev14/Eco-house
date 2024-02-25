import styled from "styled-components";

export const Title = styled.h2`
  font-size: 100px;
  font-weight: 400;

  text-transform: uppercase;
`;

export const PortfolioWrapper1 = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  padding-top: 80px;
  margin-bottom: 120px;
  width: fit-content;
`;

export const PortfolioWrapper2 = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  position: relative;
  padding-bottom: 150px;
  width: fit-content;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;

  background-color: transparent;
  border: 1px solid #f8f8f8;
  border-radius: 50%;
  width: 229px;
  height: 229px;
  padding: 10px;

  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ButtonBuilt = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-size: 24px;
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
`;

export const ProjectWrapper = styled.div`
  width: 425px;
`;

export const Caption = styled.p`
  color: #858585;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
`;
