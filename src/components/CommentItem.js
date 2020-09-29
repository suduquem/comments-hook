import React from 'react';

const CommentItem = ({ key, comment }) => {
  console.log('Lo que recibe CommentItem', comment);
return <div>{comment.body}</div>
};

export default CommentItem;
