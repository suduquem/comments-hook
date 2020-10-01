import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Comments from './components/Comments.js';
import AddComment from './components/AddComment.js';
import Title from './components/Title.js';
import About from './components/pages/About.js';

import logo from './logo.svg';
import './App.css';

function App() {
  // Mock
  //  const [comments, setComments] = useState([
  //   {
  //     postId: 1,
  //     id: 1,
  //     name: 'id labore ex et quam laborum',
  //     email: 'Eliseo@gardner.biz',
  //     body:
  //       'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  //   },
  //   {
  //     postId: 1,
  //     id: 2,
  //     name: 'quo vero reiciendis velit similique earum',
  //     email: 'Jayne_Kuhic@sydney.com',
  //     body:
  //       'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  //   },
  //   {
  //     postId: 1,
  //     id: 3,
  //     name: 'odio adipisci rerum aut animi',
  //     email: 'Nikita@garfield.biz',
  //     body:
  //       'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  //   },
  // ]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=2')
      .then((response) => response.json())
      .then((result) => setComments(result), console.log('result', comments))
      .then((json) => console.log('Fetch de la API', json));
  }, []);
  // Si se pone una varible entre esos [] cada que cambie la variable, el useEffect se va a ejecutar
  // Si se deja vacío solo se ejecuta la primera vez

  const addComment = (comment) => {
    console.log('el id', comment.id);
    console.log('Comentario a añadir recibido en APP', comment);
    // comments.length + 1;
    comment.id = comments[comments.length - 1].id + 1;
    const newComment = [...comments, comment];
    // setComments(newComment); //Sin usar la API

    //Usando la API, agregar un comentario:
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        body: comment.body,
        userId: comment.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(setComments(newComment));
  };

  const deleteComment = (id) => {
    console.log('id', id);
    fetch('https://jsonplaceholder.typicode.com/comments/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log('delete comment', json))
      .then(setComments(comments.filter((item) => item.id !== id)));
  };

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <Title />
        <Route
          exact
          path='/'
          render={(props) => (
            <React.Fragment>
              <AddComment addBody={addComment} />

              {/* // index es una prop, {comments} viene del state */}

              <Comments comments={comments} delComment={deleteComment} />
            </React.Fragment>
          )}
        />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
