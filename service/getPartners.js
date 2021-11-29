import axiosConfig from "./base";
import { getPartnersApi } from "../config/ApiPartner";

const getPartnerCondition = async (page, page_size, keyword) => {
    const response = await axiosConfig({
        method: 'POST',
        url: getPartnersApi,
        data: {
           page: page || 1,
           page_size: page_size || 10,
           keyword: keyword || "" 
        }
    })
    return response;
};

export default getPartnerCondition;