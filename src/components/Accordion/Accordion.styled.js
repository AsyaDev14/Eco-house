import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  /* width: 100%; */
`;

export const StageWrapper = styled.div`
  width: 100%;
  height: 227px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #fbfbfb;
  border-bottom: 1px solid #fbfbfb;
  margin-bottom: -2px;

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
  justify-content: space-between;
  padding: 40px 80px;

  z-index: 10;
  width: 1760px;
  height: 150px;

  color: #1d1d1d;
  background-color: #fbfbfb;

  &:nth-of-type(-n + 4) {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:nth-last-of-type(n + 5) {
    position: absolute;
    top: 0;
    right: 0;
  }

  h4 {
    font-size: 50px;
    font-weight: 400;

    width: 900px;

    padding-right: 29px;
  }

  p {
    font-size: 24px;
    font-weight: 400;

    width: 574px;

    padding-right: 88px;

    &:first-of-type {
      color: #858585;
      font-size: 50px;
      padding-right: 150px;
      width: auto;
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
