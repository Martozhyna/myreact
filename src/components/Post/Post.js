import {postsService} from "../../services";


function Post (props) {
    let {item,setPosts,setPostForUpdate} = props;

    const deletePost = async () => {
        await postsService.deleteById(item.id);
        setPosts(posts => {
            const index = posts.findIndex(value => value.id === item.id);
            posts.splice(index, 1);
            return [...posts];
        })
    }



    return (
        <div>
            <h3>{item.id}. {item.title}</h3>
            <p>UserId: {item.userId}</p>
            <p>Body: {item.body}</p>
            <button onClick={() => setPostForUpdate(item)}>Update</button>
            <button onClick={() => deletePost()}>Delete</button>
        </div>
    )
}
export {Post}