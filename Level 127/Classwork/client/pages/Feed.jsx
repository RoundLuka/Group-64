import Posts from '../components/Posts';
import { usePost } from '../context/PostContext';
import { useAuth } from '../context/AuthContext';
import {useEffect} from 'react';

const Feed = () => {
    const { user } = useAuth();
    const { getAllPosts } = usePost();

    useEffect(() => {
            getAllPosts();
    }, [user])

    return (
        <div>
            <h2>Feed</h2>
            <Posts />
        </div>
    )
}

export default Feed;