import { fetchUser } from "../utils/fetch";

const userInfo = fetchUser();

export const initialState = {
    user: userInfo
};