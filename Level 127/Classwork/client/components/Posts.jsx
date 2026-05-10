import { usePost } from '../context/PostContext';

const Posts = () => {
    const { posts } = usePost();

    return (
        <div>
            <h3>Posts</h3>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts;