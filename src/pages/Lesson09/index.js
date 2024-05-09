import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart09";
import instruction from "./instruction.md";

const convertData = (input) => {
  const ratio = 0.01;
  /*
  const set_mini = new Set()
  for(const item of input){
    set_mini.add(item.ministry)
  }
  const arr_mini = Array.from(set_mini)
  console.log(arr_mini)
  */

  //全体の配列を作成
  const ministryCount = {};
  const set_mini = new Set(input.map(e=>e.ministry))
  const arr_mini = Array.from(set_mini)
  .map(mini => {
    const mini_p = input.filter(e=>e.ministry===mini)
    const bureauCount = {};
    const set_bur = new Set(mini_p.map(e=>e.bureau))

    const arr_bur = Array.from(set_bur)
    .map(bur=> {
      const bur_p = mini_p.filter(e=>e.bureau===bur)
      const set_dep = new Set(bur_p.map(e=>e.department))
      
      const arr_dep = Array.from(set_dep)
      .map(dep=> {
        const dep_p = bur_p.filter(e=>e.department===dep) //dep(課)のオブジェクト
        return {
          name: dep,
          count: dep_p.length
        }
      })
      .filter(dep => dep.count/input.length >= ratio) //arr_depの中は、dep.countが1%を超えた課のみとなっている
      arr_dep.sort((item1,item2) => item2.count-item1.count)//降順は右から左を引く　カウントの値でソート
      //フィルターで取り除かれた1%に満たない課のカウントを合計し、push
      arr_dep.push({
        name:"その他",
        count:bur_p.length-arr_dep.reduce((a,dep) => a+dep.count,0) //局のプロジェクト数-フィルター後のプロジェクト数
      }) 
      bureauCount[bur] = bur_p.length;//局の中のプロジェクト数
      return {
        name: bur,
        children:arr_dep
      }
      
    })
    
    .filter(bur => bureauCount[bur.name]/input.length >= ratio)//burはnameもchildrenも入ってるからnameを指定する必要あり
    
    arr_bur.sort((item1,item2) => bureauCount[item2.name]-bureauCount[item1.name])
    arr_bur.push({
      name:"その他",
      count:mini_p.length-arr_bur.reduce((a,bur)=>a+bureauCount[bur.name],0)
    })

    ministryCount[mini] = mini_p.length;
    return {
      name: mini,
      children:arr_bur
    }

  })
  console.log(arr_mini)
  arr_mini.sort((item1,item2) => ministryCount[item2.name]-ministryCount[item1.name])
  return {
    children:arr_mini
  }
}



const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer09"
      convertData={convertData}
      dataUrl="data/judgit-departments.json"
      instruction={instruction}
      title="Lesson 09"
      Chart={Chart}
    />
  );
};

export default Lesson;
