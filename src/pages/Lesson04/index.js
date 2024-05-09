import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  //(1)
  const setSpecies = new Set(input.map(element => element.species))

  //(2)
  /*
  //const setSpecies = new Set()
  //setSpecies.add(input.map(element => element.species))
  //これだとspecies配列を入れてしまっているため不適

  input.forEach(element => setSpecies.add(element.species));//1つずつ入れる
  */
  console.log(setSpecies);
  const arraySpecies = Array.from(setSpecies)
  console.log(arraySpecies)

  return arraySpecies.map(e => {              //eはspecies(3種)のオブジェクト
    return {
      id:e,
      data:input
      .filter((e2) => e2.species === e) //e2はinputのオブジェクト
      .map((e3) => {                          //e3はinputにspecies(3種)にfilterをかけたオブジェクト
        return {
          x:e3.sepalLength,
          y:e3.petalWidth
        }
      })
    };
  })
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
