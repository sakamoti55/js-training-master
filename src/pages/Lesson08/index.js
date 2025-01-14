import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart08";
import instruction from "./instruction.md";

const convertData = (input) => {
  // nodes は  source　の　Setオブジェクト
  // links は  tagのCombinationをとる

  //重複なしかつソートされたタグの配列を作成
  const t = new Set()
  for(const item of input){
    for(const tag of item.tags){
      t.add(tag)
    }
  }
  const arr_tag = Array.from(t).sort()
  console.log(arr_tag)
  // カウント配列の作成(count["..."]["..."]でそのpairの数を出力)
  const count = []
  for(var i=0;i<arr_tag.length;i++){
    count[arr_tag[i]]= []
    for(var j=i+1;j<arr_tag.length;j++){
      count[arr_tag[i]][arr_tag[j]]=0
    }
  }
  console.log(count)

  // inputのtagsから作れるソートしたpairを重複ありで配列に収める
  const arr_pair = []
  for(const item of input){
    const sorted_tags=item.tags.sort()
    for(let i=0;i<sorted_tags.length;i++){
      for(let j=i+1;j<sorted_tags.length;j++){
        arr_pair.push([sorted_tags[i],sorted_tags[j]])
      }
    }
  }
  console.log(arr_pair)
  // arr_pairの要素に対応したcount配列の要素をインクリメント
  for(const element of arr_pair){
    count[element[0]][element[1]] += 1;
  }
  console.log(count)

  // count配列の要素が2を超えたとき、その添え字(arr_tag要素)のペアをlinksにpush
  const links = []
  for(let i=0;i<arr_tag.length;i++){
    for(let j=i+1;j<arr_tag.length;j++){
      if(count[arr_tag[i]][arr_tag[j]]>=2){
        links.push([arr_tag[i],arr_tag[j]])
      }
    }
  }
  console.log(links)
  
  // linksの要素(の要素)を集合化し、配列化したarr_nodeの作成
  const set_node = new Set()
  for(const l of links){
    set_node.add(l[0])
    set_node.add(l[1])
  }
  const arr_node = Array.from(set_node).sort()
  console.log(arr_node)
  return { 
    nodes: arr_node.map(e=>{
      return {
        id:e
      }
    }), 
    links: links.map(e=>{
      return{
        source:e[0],
        target:e[1]
      }
    }) }; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer08"
      convertData={convertData}
      dataUrl="data/qiita-articles.json"
      instruction={instruction}
      title="Lesson 08"
      Chart={Chart}
    />
  );
};

export default Lesson;
