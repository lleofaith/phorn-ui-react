import { createContext, useReducer } from "react";
import { reducer } from "./reducer.js";

const initialState = {
    photos: JSON.parse(localStorage.getItem("photos")) || []
}

export const PhotoContext = createContext();

export const PhotoContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PhotoContext.Provider value={{
            photos: state.photos,
            dispatch
        }}>
            {children}
        </PhotoContext.Provider>
    );
}