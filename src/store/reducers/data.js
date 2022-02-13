import { SET_ALL_DATA } from "../types";

export const dataReducer = (state = [], action) => {
    switch (action.type) {
        case SET_ALL_DATA:
            return { ...state, data: action.data };
        default:
            return state;
    }
}