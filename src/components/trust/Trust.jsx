import React from "react";
import TrustItem from "./TrustItem";
import Container from "../Container/Container";
import { TrustWrapper } from "./Trust.styled";

const Trust = () => {
  const trustData = [
    {
      text: "Займаємося будівництвом приватних будинків в Києві і області з 2011 року. За цей час підібрали в штат співробітників з вузькопрофільними спеціальностями, які відмінно зарекомендували себе як професіонали. Їм можна довірити будівництво будинку `під ключ` будь-якої складності.",
      number: "01",
      title: "Екологічність",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos tempore doloribus molestias id amet soluta sunt consequatur! Quas, nam!",
      number: "02",
      title: "Досвід",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos tempore doloribus molestias id amet soluta sunt consequatur! Quas, nam!",
      number: "03",
      title: "Офіційна гарантія",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos tempore doloribus molestias id amet soluta sunt consequatur! Quas, nam!",
      number: "04",
      title: "Oперативність",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos tempore doloribus molestias id amet soluta sunt consequatur! Quas, nam!",
      number: "05",
      title: "Доступні ціни",
    },
  ];

  return (
    <>
      <Container>
        {trustData.map(({ text, number, title }) => {
          return (
            <TrustItem key={number} number={number} title={title} text={text} />
          );
        })}
      </Container>
    </>
  );
};

export default Trust;
