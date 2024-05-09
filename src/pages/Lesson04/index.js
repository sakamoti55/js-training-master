import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  //集合の作成(1)
  const setSpecies = new Set(input.map(element => element.species))

  //集合の作成(2)
  
  /*
  const setSpecies = new Set()
  // setクラスを作り出す
  // setSpecies.add(input.map(element => element.species))
  //これだとspecies配列を入れてしまっているため不適

  input.forEach(({species}) => setSpecies.add(species));//1つずつ入れる
  */
  console.log(setSpecies);
  //集合を配列に直す
  const arraySpecies = Array.from(setSpecies)
  // setも反復可能
  console.log(arraySpecies)
  //arraySpecies配列に対してmapメソッドを用いて配列の要素にアクセス
  return arraySpecies.map(e => {          //eはspecies(3種)のオブジェクト
    return {
      // プロパティはidとdata
      id:e,
      data:input //input(全体)の中でspeciesがeのオブジェクトだけ取ってきたい
      .filter((e2) => e2.species === e) //e2はinputのオブジェクト
      .map((e3) => {        //species===eのオブジェクトそれぞれがe3
        return { //[{x:  ,y:  },{x: ,y:　},...]の形で返す
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
