import React from 'react';

import './CommentItem.css';

const CommentItem = ({ comment }) => {
  console.log('Lo que recibe CommentItem', comment);
  return <div className='item'>{comment.body}</div>;
};

export default CommentItem;
