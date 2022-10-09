import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {PostForm} from "../PostForm/PostForm";
import {Post} from "../Post/Post";

function Posts () {
    let [posts, setPosts] = useState([]);

    let [postForUpdate, setPostForUpdate] = useState(null);


    useEffect(()=>{
        postsService.getAll().then(({data}) => setPosts(data));
    },[])
    return (
        <div>
            <div>
                <PostForm setPosts={setPosts} setPostForUpdate={setPostForUpdate} postForUpdate={postForUpdate}/>
            </div>
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value} setPosts={setPosts} setPostForUpdate={setPostForUpdate} />)
                }
            </div>

        </div>
    )
}
export {Posts}