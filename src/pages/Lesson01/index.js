import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";
//input
/*
[
  ["哲学科", 88],
  ["史学科", 133],
  ["国文学科", 133],
  ：
  ["情報科学科", 80],
  ["物理学科", 70],
  ["生命科学科", 70],
  ["化学科", 90]
]
*/
const convertData = (input) => {
  return input.map(([name,count]) => {
    return {name,count};
  });
} 


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
