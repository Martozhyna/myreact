import {useNavigate} from "react-router-dom";

import css from './Post.module.css';
function Post ({post}) {
    let navigate = useNavigate();
    return (
        <div className={css.Post}>
            <h3>{post.id}. {post.title}</h3>
            <button onClick={() => navigate(`${post.id.toString()}`,{state:{...post}})}>Details</button>
        </div>
    )
}
export {Post}