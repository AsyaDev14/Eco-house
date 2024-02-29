import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0 50px;

  position: relative;

  img {
    width: 124px;
  }
`;

export const PartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  font-size: 24px;
  font-weight: 300;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 80px;
  font-weight: 400;
  height: 57px;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  a {
    font-weight: 300;
  }
`;

export const Copyright = styled.p`
  position: absolute;
  right: 0;
  bottom: 50px;

  font-size: 16px;
  font-weight: 300;

  color: #858585;
`;
