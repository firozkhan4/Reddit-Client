import { useContext, useState } from "react";
import { ContentContext } from "../contexts/Content";

export default function SearchBox({setShowSearchBox}) {
  const { subreddit, setSubreddit } = useContext(ContentContext);
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    if(e.key !== "Enter") return
    if (search.trim() === "") return;

    try {
      const response = await fetch(`https://www.reddit.com/r/${search}.json`);

      if (!response.ok) {
        throw new Error("Subreddit not found");
      }
      const data = await response.json();
      setSubreddit(data.data.children);
      setShowSearchBox(false)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="position-absolute card p-4 shadow-lg top-50 start-50 translate-middle-x search-box"
      style={{ width: "500px" }}
    >
      <input
        type="text"
        placeholder="r/"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="form-control"
        onKeyDown={handleSearch}
        autoFocus
      />
      <ul>
        <li>
          programming
          <section></section>
        </li>
      </ul>
    </div>
  );
}
