import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // Store the users in a state variable.
  // We are passing an empty array as the default value.
  let [posts, setPosts] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
    .get('http://localhost:8000/api/posts/')
    .then(res=>{setPosts(res.data);})
    .catch(err=>{console.log(err);});
  }, []);

  return(
    <Fragment>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </Fragment>
  );
}

export default App;