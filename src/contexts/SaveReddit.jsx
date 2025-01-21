import { createContext, useState } from "react";

export const SaveRedditContext = createContext();

export const SaveRedditProvider = ({ children }) => {
  const [saveList, setSaveList] = useState([]);
  
  return (
    <SaveRedditContext.Provider value={{ saveList, setSaveList }}>
      {children}
    </SaveRedditContext.Provider>
  );
};
