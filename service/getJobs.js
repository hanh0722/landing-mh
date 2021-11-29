import { ApiJob } from "../config/ApiJob";
import axiosConfig from "./base";

const getJobs = async (config) => {
    const response = await axiosConfig({
        method: 'POST',
        url: ApiJob,
        data: {
            ...config
        }
    })
    return response;
}

export default getJobs;