import styled from "styled-components";

export const OffersTittle = styled.p`
  font-size: 100px;
  text-transform: uppercase;
  padding-bottom: 40px;
  border-bottom: 1px solid #858585;
`;

export const OffersSubTit = styled.p`
  color: #858585;
  font-size: 22px;
  font-weight: 400;
  padding: 140px 70px 0 0;
`;

export const OffersBuild = styled.p`
  font-size: 80px;
  font-weight: 400;
  line-height: 1;
  padding-bottom: 60px;
  margin: 0;
  text-transform: uppercase;
`;

export const OffersDescription = styled.p`
  font-size: 24px;
  width: 573px;
`;

export const OffersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 21px;
  margin-bottom: 60px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: end;
  gap: 20px;
`;

export const OffersButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-size: 22px;
  font-weight: 500;

  background-color: ${(props) => props.$bgc || "transparent"};
  color: ${(props) => props.$col || "#f8f8f8"};

  border: 1px solid #f8f8f8;
  border-radius: 50%;
  width: 229px;
  height: 229px;

  padding: 10px;

  position: absolute;
  top: 0;
  right: 0;

  &:hover,
  &:active {
    color: ${(props) => props.$hovcol || "#F8F8F8"};
    background-color: ${(props) => props.$hovbgc || "#f8f8f8"} #f8f8f8;
    border: ${(props) => props.$bord || "none"} none;
  }
`;

// export const IndividualButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   color: #1d1d1d;
//   text-transform: uppercase;
//   font-size: 22px;
//   font-weight: 500;
//   line-height: 1.3;

//   background-color: #f8f8f8;
//   border: none;
//   border-radius: 50%;
//   width: 229px;
//   height: 229px;

//   padding: 0;

//   position: absolute;
//   top: 0;
//   right: 0;

//   &:hover,
//   &:active {
//     color: #fbfbfb;
//     background-color: transparent;
//     border: 1px solid #f8f8f8;
//   }
// `;
