import { createContext, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [subreddit, setSubreddit] = useState([]);
  return (
    <ContentContext.Provider value={{ subreddit, setSubreddit }}>
      {children}
    </ContentContext.Provider>
  );
};
