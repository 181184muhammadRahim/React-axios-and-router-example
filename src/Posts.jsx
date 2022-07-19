import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    console.log("Use Effect called");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((respone) => {
      setPosts(respone.data);
    });
  }, []);
  // console.log(posts[0].userId);

  return (
    <>
      {posts !== null ? (
        <div>
          <h1>Posts</h1>
          <ol>
            {posts.map((element) => (
              <li style={{ backgroundColor: "palegoldenrod" }} key={element.id}>
                <h2>{"User Id: " + element.userId}</h2>
                <h2>{"Title: " + element.title}</h2>
                <h2>{"Body: " + element.body}</h2>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Posts;
