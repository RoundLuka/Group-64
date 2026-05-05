import { useAuth } from "../context/AuthContext";


const Post = () => {
    // const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            postTitle: e.target.postTitle.value,
            postContent: e.target.postContent.value,
        }

        register(account)
        e.target.reset()
    }

    return (
        <>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="postTitle" placeholder="Post Title" required  />
                <textarea name="postContent">

                </textarea>

                <button>Submit</button>
            </form>
        </>
    )
}

export default Register;