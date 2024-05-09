import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
  return input.map((e) => {
    const val_bmi = e.x/(e.y*e.y);
    return {
      color:e.gender === "男性" ?"blue":"red",//?真:偽
      gender:e.gender,
      bmi:val_bmi,
      weight:e.x,
      height:e.y
    };

  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
