import styled from "styled-components";

export const AdaptiveContainer = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 0 74px;
  @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0 50px;
  }
`;
