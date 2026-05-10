
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";
import { useEffect } from "react";

const Profile = () => {
    const { user } = useAuth();
    const { getPosts } = usePost();

    useEffect(() => {
        getPosts();
    }, [user])

    return (
        <>
            <section>
                <h2>Profile Page</h2>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
            </section>
            
            <div>
                <NewPost />
            </div>

            <div>
                <Posts  />
            </div>
        </>
    )
}
export default Profile;