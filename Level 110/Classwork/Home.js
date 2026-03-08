import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
    const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
        const [posts, setPosts] = useState([]);
}

  const handleCreatePost = () => {
    if (title.trim() && description.trim()) {
      const newPost = { id: Date.now(), title, description };
      setPosts([...posts, newPost]);
      setTitle("");
      setDescription("");
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        <button
          data-testid="create-button"
          className="mt-10"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} onDelete={handleDeletePost} />
      </div>
    </div>
  );
}

export default Home;
