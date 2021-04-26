import React from "react";
import Block from "./block";

const BlockContainer = (props: any) => {
  let blocks = props.array.map((a: any,index:number) => (
    
      <Block cover_i={a.cover_i} title={a.title} author_name={a.author_name}  show={props.show} index={index} key={index}/>

  ));

  return blocks;
};

export default BlockContainer;
