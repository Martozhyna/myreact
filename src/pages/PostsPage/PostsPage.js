import {Outlet} from "react-router-dom";

import css from './PostPage.module.css';
import {Posts} from "../../components";


function PostsPage () {
    return (
        <div className={css.PostPage}>
            <div>
                <Posts/>
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    )
}
export {PostsPage}