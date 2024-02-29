import React from "react";
import TrustItem from "./TrustItem";

const Trust = () => {
  const trustData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos tempore doloribus molestias id amet soluta sunt consequatur! Quas, nam!",
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
      <div>
        {trustData.map(({ text, number, title }) => {
          return (
            <TrustItem key={number} number={number} title={title} text={text} />
          );
        })}
      </div>
    </>
  );
};

export default Trust;
