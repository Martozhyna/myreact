import {axiosService} from "./axios.service";
import {urls} from "../configs";

let postService ={
    getPosts: () => axiosService.get(urls.posts),
    getPostsById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postService};