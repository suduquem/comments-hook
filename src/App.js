import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './components/Comments';
import AddComment from './components/AddComment';

function App() {
  const [comments, setComments] = useState([
    {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body:
        'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    },
    {
      postId: 1,
      id: 2,
      name: 'quo vero reiciendis velit similique earum',
      email: 'Jayne_Kuhic@sydney.com',
      body:
        'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    },
    {
      postId: 1,
      id: 3,
      name: 'odio adipisci rerum aut animi',
      email: 'Nikita@garfield.biz',
      body:
        'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    },
  ]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then((response) => response.json())
      .then((result) => setComments(result))
      .then((json) => console.log('Fetch de la API', json));
  }, []);
  // Si se pone una varible entre esos [] cada que cambie la variable, el useEffect se va a ejecutar
  // Si se deja vacío solo se ejecuta la primera vez

  const addBody = (body) => {
    console.log('taco', body);
    const newComment = [...comments, { body }];
    setComments(newComment);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <AddComment addBody={addBody} />

      {comments.map((comments, index) => {
        // index es una prop, {comments} viene del state
        return <Comments key={index} index={index} comments={comments} />;
      })}
    </div>
  );
}

export default App;
