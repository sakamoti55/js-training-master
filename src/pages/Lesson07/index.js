import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart07";
import instruction from "./instruction.md";


const convertData = (input) => {

  //tweet,retweet
  const arr_id = [true,false]

  //日付の配列(写した　書き方暗記する)
  for (const item of input) {
    const d = new Date(`${item.createdAt} UTC`);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const date = `${d.getDate()}`.padStart(2, "0");
    item.createdAt = `${year}-${month}-${date}`;
  }
  const dates = Array.from(new Set(input.map(({ createdAt }) => createdAt)));
  dates.sort()
  console.log(dates)

  //tweet,retweetによってオブジェクトを分ける
  return arr_id.map(e => {
    return {
      id:e ?"tweet":"retweet",
      //日付データごとのオブジェクトを作成
      data:dates.map(e2 => {
        //inputデータの中で isRetweetがe かつ 日付がe2　の要素をフィルタリングし、要素数をカウント
        const count = input.filter(e3 => e3.isRetweet === e && e3.createdAt.split(" ")[0] === e2).length
        return{
          x:e2,
          y:count
        }
      })
    };
  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer07"
      convertData={convertData}
      dataUrl="data/covid19-tweets.json"
      instruction={instruction}
      title="Lesson 07"
      Chart={Chart}
    />
  );
};

export default Lesson;
