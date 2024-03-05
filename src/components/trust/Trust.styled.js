import styled from "styled-components";

export const TrustTittle = styled.h2`
  font-size: 100px;
  font-weight: 400;

  letter-spacing: 0em;
  text-transform: uppercase;
  margin-bottom: 80px;
`;

export const TrustWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #fbfbfb;
  border-bottom: 1px solid #fbfbfb;
  padding: 60px 0;
  background-color: ${(props) => props.$bgc || ""};
`;

export const TrustMain = styled.div`
  margin-bottom: 150px;
`;

export const TrustNumber = styled.div`
  font-size: 50px;
  color: #858585;
`;

export const TrustTitle = styled.div`
  font-size: 50px;
  color: ${(props) => props.$col || ""};
`;

export const TrustDescript = styled.div`
  font-size: 24px;
  width: 710px;
  color: #1d1d1d;
`;

export const Buttons = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid white;
  border-radius: 80px;
  background-color: ${(props) => props.$bgc || "transparent"};
`;

export const WrapDiv = styled.div`
  display: flex;
  gap: 200px;
  align-items: center;
  justify-content: center;
`;
