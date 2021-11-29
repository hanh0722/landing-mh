import axiosConfig from "./base";
import { apiGetCategories } from "../config/ApiCategory";

const getCategoriesCondition = async (page, page_size, keyword) => {
    const response = await axiosConfig({
        method: 'POST',
        url: apiGetCategories,
        data: {
            page: page || 1,
            page_size: page_size ? page_size : 10,
            keyword: keyword || ""
        }
    })
    return response
}

export default getCategoriesCondition