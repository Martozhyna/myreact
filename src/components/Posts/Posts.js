import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";

function Posts () {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts().then(({data}) => setPosts(data));
    },[])
    return (
        <>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </>
    );
}
export {Posts}