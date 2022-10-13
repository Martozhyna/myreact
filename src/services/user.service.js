import {axiosService} from "./axios.service";
import {urls} from "../configs";

let userService ={
    getAll: () => axiosService.get(urls.users)
}

export {userService};