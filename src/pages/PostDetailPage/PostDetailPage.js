import {useLocation} from "react-router-dom";

import {PostDetails} from "../../components";

function PostDetailPage () {
    let {state} = useLocation()
    console.log(state);

    return (
        <>
            {
                <PostDetails key={state.id} detail={state}/>
            }
        </>
    );
}
export {PostDetailPage}