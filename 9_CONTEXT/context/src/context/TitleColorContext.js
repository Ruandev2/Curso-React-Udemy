//5 - Context mais Compleços
import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {

    //switch
    switch(action.type){
        case "RED":
            return{...state, color:"red"}
        case "BLUE":
            return{...state,color:"blue"}   
        default:
            return state;    
    }
}
export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TitleColorReducer, {
        color: "purple",
    });

    console.log("Title Color Context:", state);

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    );
};