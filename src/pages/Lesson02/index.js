import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

/*
集計結果は input として以下のように与えられます。

[
  { "tag": "JavaScript", "count": 30644 },
  { "tag": "Node.js", "count": 10235 },
  { "tag": "CI", "count": 598 },
  { "tag": "java8", "count": 951 },
  ：
]
*/
const convertData = (input) => {
  input.sort((x,y) => {
    return y.count-x.count;
  });
  return input.slice(1,21);
};


const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
