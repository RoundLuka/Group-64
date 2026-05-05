import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const { user } = useAuth();

    return (
        <>
            <section>
                <h2>Profile Page</h2>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
            </section>
        </>
    )
}
export default Profile;