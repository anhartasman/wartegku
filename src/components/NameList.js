import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  //key is needed when creating list of elements. Key gives the elements stable identity
  const personList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{personList}</div>;
}

export default NameList;
