import React from "react";
import CommentItem from "./CommentItem";

// Declaración como variable, la otra opción es como función normal o arrow function
const Comments = ({ index, comments }) => {
  console.log("Lo que recibe Comments", comments);
  console.log("Lo que recibe Comments index", index);
  //return <CommentItem comment={comments.body}/>
  return <div>{comments.body}</div>;
};

export default Comments;
