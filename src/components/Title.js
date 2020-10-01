import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css';

export default function Title() {
  return (
    <div className='title'>
      <h1>Comment List</h1>
      <Link className="link" to='/'>Home |</Link>
      
      <Link className="link" to='/about'> About</Link>
    </div>
  );
}
