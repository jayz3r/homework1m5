import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

  return (
    <div>
    <h2>Posts</h2>
    {posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
  )
}

export default Posts