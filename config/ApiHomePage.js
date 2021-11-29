import { serverURL } from ".";

const getHomePageById = id => `${serverURL}/home-page/${id}`;

export {
    getHomePageById
}