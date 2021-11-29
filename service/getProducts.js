import { apiGetProducts } from "../config/ApiProducts";
import axiosConfig from "./base";

const getProductsByCondition = async (page, page_size) => {
    const response = await axiosConfig({
        url: apiGetProducts,
        method: "POST",
        data: {
            page: page,
            page_size: page_size
        }
    })
    return response;
}

export {
    getProductsByCondition
}