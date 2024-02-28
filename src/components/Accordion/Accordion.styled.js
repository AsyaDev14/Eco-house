import styled from "styled-components";

export const AccordionItem = styled.div`
  min-width: 861px;
  height: 197px;

  .accordion {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: 1px solid #fbfbfb;
    /* border-bottom: 1px solid #fbfbfb; */
    overflow: hidden;
    transition: all 0.3s ease;

    &:nth-child(4n + 4) {
      /* border-bottom: 1px solid #fbfbfb; */

      background-color: aqua;
    }

    &.active {
      /* transform: scale(1.03); */
      border: 1px solid #fbfbfb;
    }
  }

  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    cursor: pointer;

    &.active {
      color: #1d1d1d;
      background-color: #fbfbfb;
    }

    span {
      width: fit-content;
      height: 38px;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #fbfbfb;
      border-radius: 117px;
      padding: 14px 28px;
      user-select: none;
      transition: all 0.3s ease;

      text-transform: uppercase;
      font-size: 24px;
    }
  }

  .accordion-content {
    display: flex;
    align-items: center;
    font-size: 14px;
    text-align: justify;
    line-height: 26px;
    height: 100%;
    padding: 20px;
    color: #1d1d1d;
    background-color: #fbfbfb;
    border-top: 1px solid #43434a;
  }
`;

export const StageTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 66px;
`;

export const Number = styled.p`
  color: #858585;
  font-size: 50px;
  font-weight: 400;
`;

export const StageTitle = styled.p`
  font-size: 50px;
  font-weight: 400;
`;
