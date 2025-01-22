import { createContext, useEffect, useState } from "react";

export const SaveRedditContext = createContext();

export const SaveRedditProvider = ({ children }) => {
    const [saveList, setSaveList] = useState([]);

    const addSubReddit = (r) => {
        setSaveList((prev)=>{
            const newList = [...prev,r];
            localStorage.setItem("list",JSON.stringify(newList));
            return newList;
        })
    };

    const removeSubReddit = (r)=>{
        setSaveList((prev)=>{
            const newList = prev.filter((item) => item !== r);
            localStorage.setItem("list",JSON.stringify(newList));
            return newList;
        })
    }

    useEffect(() => {

        try{
            const list = JSON.parse(localStorage.getItem("list"));
            setSaveList(list ?? []);
        }catch(error){
            console.error("Error parsing localStorage data:",error);
            setSaveList([]);
        }
    },[]);
    return (
        <SaveRedditContext.Provider value={{removeSubReddit, saveList, setSaveList, addSubReddit }}>
            {children}
        </SaveRedditContext.Provider>
    );
};
