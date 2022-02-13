import { GET_ALL_DATA, SET_ALL_DATA } from "../types";

export const getAllData = () => {
    return { type: GET_ALL_DATA }
}

export const setAllData = (data) => {
    return {
        type: SET_ALL_DATA,
        data
    }
}
