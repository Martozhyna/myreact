import {axiosService} from "./axios.service";
import {urls} from "../configs";

let postsService = {
    getAll: () => axiosService.get(urls.posts),
    create: (post) => axiosService.post(urls.posts, post),
    deleteById: (id) => axiosService.delete(`${urls.posts}/${id}`)
}

export {
    postsService
};