import { serverURL } from ".";

const apiGetProducts = `${serverURL}/product/search`;

const getProductById = id => `${serverURL}/product/${id}`;
export {
    apiGetProducts,
    getProductById
}