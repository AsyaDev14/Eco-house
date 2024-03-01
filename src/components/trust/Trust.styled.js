import styled from "styled-components";

export const TrustWrapper = styled.div`
  display: flex;
  border-top: 1px solid #fbfbfb;
  border-bottom: 1px solid #fbfbfb;
  padding: 60px 0;
  background-color: ${(props) => props.$bgc || ""};
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
