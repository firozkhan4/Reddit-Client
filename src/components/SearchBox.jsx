import { useContext, useState } from "react";
import { ContentContext } from "../contexts/Content";
import { SaveRedditContext } from "../contexts/SaveReddit";

export default function SearchBox({ setShowSearchBox }) {
  const { subreddit, setSubreddit } = useContext(ContentContext);
  const { saveList, addSubReddit } = useContext(SaveRedditContext);
  const [search, setSearch] = useState("");

  function handleHTML(content) {
    const entities = {
      "&lt;": "<",
      "&gt;": ">",
      "&#39;": "'",
      "&quot;": '"',
      "&amp;": "&",
      "&#36;": "$",
    };

    return content.replace(
      /&(lt|gt|#39|quot|amp|#36);/g,
      (match) => entities[match]
    );
  }

  const handleSearch = async (e) => {
    if (e.key !== "Enter") return;
    if (search.trim() === "") return;

    try {
      const response = await fetch(`https://www.reddit.com/r/${search}.json`);

      if (!response.ok) {
        throw new Error("Subreddit not found");
      }
      const data = await response.json();

      data.data.children.forEach((item) => {
        if (
          item.data.secure_media &&
          item.data.secure_media.oembed &&
          item.data.secure_media.oembed.html
        ) {
          const content = item.data.secure_media.oembed.html;
          item.data.secure_media.oembed.html = handleHTML(content);
        }

        if (item.data.selftext_html) {
          const content = item.data.selftext_html;
          item.data.selftext_html = handleHTML(content);
        }
      });

      setSubreddit(data.data.children);
      setShowSearchBox(false);
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
        {saveList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
