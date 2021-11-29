import { serverURL } from ".";

const getNewsApi = `${serverURL}/news/search`;
const getNewById = id => `${serverURL}/news/${id}`;
export {
    getNewsApi,
    getNewById
}