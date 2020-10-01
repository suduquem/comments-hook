import React from 'react';
import CommentItem from './CommentItem.js';

// Declaración como variable, la otra opción es como función normal o arrow function
const Comments = ({ comments }) => {
  console.log('Lo que recibe Comments', comments);
  return comments.map((item) => <CommentItem key={item.id} comment={item} />);
  //return <div>{comments.body}</div>;
};

export default Comments;
