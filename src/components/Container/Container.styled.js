import styled from "styled-components";

export const AdaptiveContainer = styled.div`
  margin: 0 auto;
  max-width: 1760px;
  padding: 0 80px;
  /* @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0 50px;
  } */
  @media only screen and (max-width: 767px) {
    padding: 0 20px;
    overflow: hidden;
  }
`;
