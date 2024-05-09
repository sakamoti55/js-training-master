import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart10";
import instruction from "./instruction.md";

const convertData = (input) => {
  const degree = {}
  input.nodes.map(e=>degree[e.id]=0)
  console.log(degree)

  input.links.map(e=>degree[e.source]+=1,e=>degree[e.target]+=1)
  console.log(degree)
  const removedTags = new Set(input.nodes.map(e=>e.id).filter(e=>degree[e]<=1))
  const nodes = input.nodes.map(e=>e.id).filter(e=> !removedTags.has(e))
  const links = input.links
  .filter(e=>!removedTags.has(e.source) && !removedTags.has(e.target))

  console.log(links)
};



const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer10"
      convertData={convertData}
      dataUrl="data/topic-graph.json"
      instruction={instruction}
      title="Lesson 10"
      Chart={Chart}
    />
  );
};

export default Lesson;
