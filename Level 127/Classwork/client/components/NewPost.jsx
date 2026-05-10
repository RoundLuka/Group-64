import { usePost } from "../context/PostContext";

const NewPost = () => {
    const { createPost } = usePost()

    const handleSubmit = (e) => {
        e.preventDefault();

        const account = {
            title: e.target.title.value,
            content: e.target.content.value,
        }
        createPost(account)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Post</h3>
            <input type="text" name="title" placeholder="Post Title" required /> 
            <br />
            <textarea name="content" required>

            </textarea> 
            <br />
            <button>Submit</button>
        </form>
    )
}
export default NewPost;