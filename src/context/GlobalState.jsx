import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";


//initial state
const initialState = {
    mylist: localStorage.getItem('mylist') ? JSON.parse(localStorage.getItem('mylist')) : [],
};

//create context
export const GlobalContext = createContext(initialState);


//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    useEffect(() => {
        localStorage.setItem('mylist', JSON.stringify(state.mylist));
    }, [state]);


    //actions
    const addMovieToMylist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_MYLIST", payload: movie });
    };


    return (
        <GlobalContext.Provider value={{ mylist: state.mylist, addMovieToMylist, }}>
            {props.children}
        </GlobalContext.Provider>
    );
};