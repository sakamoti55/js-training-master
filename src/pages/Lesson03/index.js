import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md";

/*コールバック関数は'element''index''array'の3つを引数にとる
ただし、element以外は省略可

また、オブジェクトを要素に持つ配列の場合、注意が必要*/
const convertData = (input) => {
  const newData = input.filter(({gender}) => gender === "男性")
  console.log(newData)
  return newData
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
  );
};

export default Lesson;
