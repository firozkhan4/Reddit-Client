import { useContext } from "react";
import { ContentContext } from "../contexts/Content";
import orbito from "../assets/orbito.jpg";

export default function SubReddit() {
  const { subreddit } = useContext(ContentContext);
  return (
    <div className="row-5 main container">
      {subreddit.length > 0 ? (
        <div className="row">
          {subreddit.map((post, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5>{post.data.title}</h5>
                <p className="card-text">{post.data.selftext}</p>
                <div>
                    {post.data.media_embed.content}
                </div>
                <a
                  href={`https://www.reddit.com${post.data.permalink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link"
                ></a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <img src={orbito} width={100} alt="Character" />

          {/* Message Box */}
          <div className="message-box d-flex flex-column align-items-center mt-2 p-3">
            <p className="message-text text-center">
              Sorry, we couldn't find the content you're looking for. Please try
              again later.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
