import axios from "axios";

const axiosConfig = async ({ method, url, data, headers, params }) => {
    try{
        const response = await axios({
            method: method ? method : "GET",
            url: url,
            data: data ? {
                ...data
            } : null,
            headers: headers ? {
                ...headers
            } : null,
            params: params ? {
                ...params
            } : null
        });
        if(response.status >= 400 || response.data.code >= 400 || !response.data){
            const error = new Error(response.data.message) || "not found data";
            error.code = response.data.code || 500;
            throw error;
        }
        return response.data
    }catch(err){
        return {
            code: err.code || 500,
            message: err.message || "Internal Server Error"
        }
    }
};

export default axiosConfig;
