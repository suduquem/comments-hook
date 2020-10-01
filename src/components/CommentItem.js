import React from 'react';

import './CommentItem.css';

const CommentItem = ({ comment, deleteComments }) => {
  const { id, body } = comment;
  console.log('Lo que recibe CommentItem', comment);
  return (
    <div className='item'>
      <p>{body}</p>
      <button onClick={deleteComments.bind(this, id)}>x</button>
    </div>
  );
};

export default CommentItem;
