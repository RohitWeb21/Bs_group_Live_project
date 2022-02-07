import React,{ useState } from "react";
import ServiceCardData from "./JsonFiles/ServiceCard.json";
import AllCardClickData from "./JsonFiles/CardClickData.json";
const CardChangeAllData = () => {
  const [cardData, setCardData] = useState(ServiceCardData.ServiceData);

  const [cardClickDataStor, setCardClickDataStor] = useState(
    AllCardClickData.CardClickData
  );
  const [mainHeading, setMainHeading] = useState(
    cardClickDataStor.preDefineDataHeading1
  );
  const [imgChangeState, setImgChangeState] = useState(
    cardClickDataStor.preDefineImg
  );
  const [cardArticleData1, setCardArticleData1] = useState(
    cardClickDataStor.preDefineData1
  );
  const [cardArticleData2, setCardArticleData2] = useState(
    cardClickDataStor.preDefineData2
  );
  const [cardArticleData3, setCardArticleData3] = useState(
    cardClickDataStor.preDefineData3
  );
  const [cardArticleData4, setCardArticleData4] = useState(
    cardClickDataStor.preDefineData4
  );
  const [cardArticleData5, setCardArticleData5] = useState(
    cardClickDataStor.preDefineData5
  );

  function DataChange(e) {
    const CheckId = e.target.id;

    e.preventDefault();
    let CardDownArrow1 = document.querySelector("#CardDownArrow1");
    let CardDownArrow2 = document.querySelector("#CardDownArrow2");
    let CardDownArrow3 = document.querySelector("#CardDownArrow3");
    let CardDownArrow4 = document.querySelector("#CardDownArrow4");
    let CardSection1 = document.querySelector("#Card1");
    let CardSection2 = document.querySelector("#Card2");
    let CardSection3 = document.querySelector("#Card3");
    let CardSection4 = document.querySelector("#Card4");
    if (CheckId == "Card1") {
      setImgChangeState(cardClickDataStor.firstImg);
      setMainHeading(cardClickDataStor.MainHeading1);
      setCardArticleData1(cardClickDataStor.firstData1);
      setCardArticleData2(cardClickDataStor.firstData2);
      setCardArticleData3(cardClickDataStor.firstData3);
      setCardArticleData4(cardClickDataStor.firstData4);
      CardDownArrow1.style = "display:table;";
      CardDownArrow2.style = "display:none;";
      CardDownArrow3.style = "display:none;";
      CardDownArrow4.style = "display:none;";

      // Animation Effect Validation
      CardSection1.classList.add("SecundCardSection");
      CardSection1.classList.remove("CardSection");
      CardSection2.classList.add("CardSection");
      CardSection2.classList.remove("SecundCardSection");
      CardSection3.classList.add("CardSection");
      CardSection3.classList.remove("SecundCardSection");
      CardSection4.classList.add("CardSection");
      CardSection4.classList.remove("SecundCardSection");

      // setCheckAllId(2)
    } else if (CheckId == "Card2") {
      setImgChangeState(cardClickDataStor.SecondImg);
      setMainHeading(cardClickDataStor.MainHeading2);
      setCardArticleData1(cardClickDataStor.SecondData1);
      setCardArticleData2(cardClickDataStor.SecondData2);
      setCardArticleData3(cardClickDataStor.SecondData3);
      setCardArticleData4(cardClickDataStor.SecondData4);
      setCardArticleData5(cardClickDataStor.SecondData5);
      CardDownArrow1.style = "display:none;";
      CardDownArrow2.style = "display:table";
      CardDownArrow3.style = "display:none;";
      CardDownArrow4.style = "display:none;";

      // Animation Effect Validation
      CardSection2.classList.add("SecundCardSection");
      CardSection2.classList.remove("CardSection");
      CardSection1.classList.add("CardSection");
      CardSection1.classList.remove("SecundCardSection");
      CardSection3.classList.add("CardSection");
      CardSection3.classList.remove("SecundCardSection");
      CardSection4.classList.add("CardSection");
      CardSection4.classList.remove("SecundCardSection");
      // setCheckAllId(3)
    } else if (CheckId == "Card3") {
      setImgChangeState(cardClickDataStor.ThirdImg);
      setMainHeading(cardClickDataStor.MainHeading3);
      setCardArticleData1(cardClickDataStor.ThirdData1);
      setCardArticleData2(cardClickDataStor.ThirdData2);
      setCardArticleData3(cardClickDataStor.ThirdData3);
      setCardArticleData4(cardClickDataStor.ThirdData4);
      setCardArticleData5("");

      CardDownArrow1.style = "display:none;";
      CardDownArrow2.style = "display:none;";
      CardDownArrow3.style = "display:table;";
      CardDownArrow4.style = "display:none;";

      // Animation Effect Validation
      CardSection3.classList.add("SecundCardSection");
      CardSection3.classList.remove("CardSection");
      CardSection1.classList.add("CardSection");
      CardSection1.classList.remove("SecundCardSection");
      CardSection2.classList.add("CardSection");
      CardSection2.classList.remove("SecundCardSection");
      CardSection4.classList.add("CardSection");
      CardSection4.classList.remove("SecundCardSection");

      // setCheckAllId(4)
    } else if (CheckId == "Card4") {
      setImgChangeState(cardClickDataStor.ForthImg);
      setMainHeading(cardClickDataStor.MainHeading4);
      setCardArticleData1(cardClickDataStor.ForthData1);
      setCardArticleData2(cardClickDataStor.ForthData2);
      setCardArticleData3(cardClickDataStor.ForthData3);
      setCardArticleData4("");
      setCardArticleData5("");
      CardDownArrow1.style = "display:none;";
      CardDownArrow2.style = "display:none;";
      CardDownArrow3.style = "display:none;";
      CardDownArrow4.style = "display:table;";

      // Animation Effect Validation
      CardSection4.classList.add("SecundCardSection");
      CardSection4.classList.remove("CardSection");
      CardSection1.classList.add("CardSection");
      CardSection1.classList.remove("SecundCardSection");
      CardSection2.classList.add("CardSection");
      CardSection2.classList.remove("SecundCardSection");
      CardSection3.classList.add("CardSection");
      CardSection3.classList.remove("SecundCardSection");
    }
  }
  return{ DataChange, cardData, mainHeading, imgChangeState, cardArticleData1, cardArticleData2, cardArticleData3, cardArticleData4, cardArticleData5 }
};

export default CardChangeAllData;
