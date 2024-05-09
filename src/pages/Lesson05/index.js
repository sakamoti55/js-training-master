import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {
  /*
  ここ要らんかった　Setにする必要なかった
  //Setオブジェクト作成　→　配列化
  const filtered_y = new Set(input.map(e => Math.round(e.y)))
  const arrayFiltered_y = Array.from(filtered_y)
  console.log(arrayFiltered_y)

  //配列のソート
  arrayFiltered_y.sort((a,b) => a-b)
  console.log(arrayFiltered_y)
  */

  //arrayFiltered_yをyの最小から最大までの数値配列とする
  const min = Math.min(...input.map((e0) => Math.round(e0.y)))//...によって配列要素を数値化して返す
  console.log(min)
  const max = Math.round(Math.max(...input.map(e0 => e0.y)))
  console.log(max)
  const arrayFiltered_y = [];
  for(var i=0;i<=max-min;i++){
    arrayFiltered_y[i] = min+i;
  } 
  console.log(arrayFiltered_y)
  
  //配列要素それぞれの男女人数を調べる
  return arrayFiltered_y.map((e) => {
    return {
      bin:e,
      男性:input.filter((e2) => (Math.round(e2.y) === e && e2.gender === "男性")).length,
      女性:input.filter((e2) => (Math.round(e2.y) === e && e2.gender === "女性")).length
    }
  });
};


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
