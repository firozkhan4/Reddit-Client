import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../contexts/Content";
import { SaveRedditContext } from "../contexts/SaveReddit";

export default function Header() {
  const {saveList,removeSubReddit, addSubReddit} = useContext(SaveRedditContext);
  const { subreddit } = useContext(ContentContext);
  const [fill,setFill] = useState(false)

 
  const sub = subreddit?.[0]?.data?.subreddit ?? "Unknown";

    const handleBookMark = ()=>{
        const r = sub; 
        if(fill){
            removeSubReddit(r);
            setFill(false);
        }else{
            addSubReddit(r);
            setFill(true);
        }
    }
    

    useEffect(()=>{

        if(sub !== "UNknown" && sub){
            saveList.forEach((item)=> {
                if(item == sub) setFill(true);
                else setFill(false)
            })
        }

    },[subreddit])



  return (
    <div className="header d-flex align-items-center justify-content-between">
      <h2 className="header-title">Reddit Client</h2>
      <section className="header-right d-flex align-items-center">
        <p className="subreddit-name">r/{sub}</p>
        <section className="bookmark-icon" onClick={handleBookMark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fill ? "black" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bookmark"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </section>
      </section>
    </div>
  );
}
