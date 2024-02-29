import styled from "styled-components";

export const Title = styled.h2`
  font-size: 100px;
  font-weight: 400;

  text-transform: uppercase;
  text-align: left;

  padding-bottom: 80px;
`;

export const AllStagesWrapper = styled.div`
  padding-bottom: 150px;
`;

export const PairWpapper = styled.div`
  display: flex;
  gap: 38px;
`;

export const LastPairWrapper = styled.div`
  display: flex;
  gap: 38px;

  div {
    border-bottom: 1px solid #fbfbfb;
  }
`;

export const StageWrapper = styled.div`
  width: 861px;
  height: 197px;

  display: flex;
  align-items: center;

  border-top: 1px solid #fbfbfb;

  p {
    color: #858585;
    font-size: 50px;
    font-weight: 400;

    padding-right: 66px;
  }

  h4 {
    font-size: 50px;
    font-weight: 400;

    width: 487px;
    padding-right: 17px;
  }
`;

export const OpenButton = styled.button`
  border: 1px solid #fbfbfb;
  border-radius: 30px;
  background-color: transparent;

  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;

  padding: 14px 28px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  padding: 40px 80px;

  color: #1d1d1d;
  background-color: #fbfbfb;

  h4 {
    font-size: 50px;
    font-weight: 400;

    width: 487px;
    padding-right: 298px;
  }

  p {
    font-size: 24px;
    font-weight: 400;

    width: 574px;

    padding-right: 88px;

    &:first-of-type {
      color: #858585;
      font-size: 50px;
      padding-right: 200px;
      width: 90px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fbfbfb;
    background-color: #1d1d1d;
    border: none;
    border-radius: 50%;

    font-size: 24px;

    width: 60px;
    height: 60px;
    padding: 0;
  }
`;
