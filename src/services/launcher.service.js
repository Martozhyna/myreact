import {axiosService} from "./axios.service";
import {urls} from "../configs";

const launcheService = {
    getAll: () => axiosService.get(urls.launches)
}

export {
    launcheService
}