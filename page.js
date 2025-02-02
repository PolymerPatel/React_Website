"use client";
import { Post } from "@/components/Post";
import { useState, useEffect } from "react";


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      </div>
  );
}

/* export default function Home() {
  const {content, setContent} = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (content.length >= 10) alert("Tim's content is getting boring!")
    console.log("run")
  }, [content, author]);

  function addPost() {
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false,
    }

    setPosts([...posts, newPost]);
    setContent("");
    setAuthor("");
    setTitle("");
  }

  return (
  <div>
    <div>
      <input 
        type="text" 
        value ={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        />
      <input 
        type="text" 
        value ={content} 
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        />
      <input 
        type="text" 
        value ={author} 
        onChange={(e) => setAuthor(e.target.value))
        placeholder="Author"
        />
      
      <button>Add Post</button>
    </div>
    <div className="posts">
      {posts.map(post, idx) => ( 
        <Post {...post} key=(idx + Math.random()} />
      ))}
    </div>
  </div>
}

  /*
  const [count, setCount] = useState(0);

  function onCount() {
    setCount(count + 1)
  }

  return (
  <>
    <p>(count)</p>
    <button onClick={onCount}>Count Up!</button>
  </>
  );
}

*/



  /*

  {}
  const posts = [
  {
      title: "My Post",
    author: "Roger" 
    content: "I will be better than Tim" 
    following: false
  }
  ];

    return (
        <div>
        {posts.map((content, idx) => { 
          return <Post {...content} key={idx + Math.random()} />;
          (
            <div>
              <p>hello world</p>
            </div>
          title="Tim is the jerk"
          author="Tim"
          content="Time is more important than tim"
          following={false}
        />
        <Post
            title="Time is the most important"
            author="Tim"
            content="Productive time will help me become a better programmer, not Tim"
            following={True}
        />
        </div>
    );
}

function Text({ content, strong }) {
  if (strong) {
    return <strong>{content}</strong>;
  }
  return <p>{content}</p>;
}

export default function Home() {
  return (
    <div>
      <Text content="hello world" strong={false}/>
      <Text content="my name is" strong={ true}/>
      <Text content="Rim!" strong={false}/>
    </div>
  );
}

*/