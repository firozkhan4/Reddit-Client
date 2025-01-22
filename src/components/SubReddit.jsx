import { useContext } from "react";
import { ContentContext } from "../contexts/Content";
import orbito from "../assets/orbito.jpg";
import ImageG from "./ImageG";

export default function SubReddit() {
  const { subreddit } = useContext(ContentContext);

  return (
    <div className="row-5 main container">
      {subreddit.length > 0 ? (
        <div className="row">
          {subreddit.map((post, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h3>{post.data.title}</h3>
                <div>
                  {post.data.secure_media &&
                    post.data.secure_media.oembed &&
                    post.data.secure_media.oembed.thumbnail_url && (
                      <img
                        src={post.data.secure_media.oembed.thumbnail_url}
                        className="w-100 rounded"
                      />
                    )}
                </div>
                <div>
                  {post.data.preview &&
                    post.data.preview.images &&
                    post.data.preview.images[0].resolutions && (
                      <ImageG
                        source={post.data.preview.images[0].resolutions}
                      />
                    )}
                </div>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: post.data.selftext_html ?? "",
                  }}
                ></p>

                <p className="d-flex justify-content-end">
                  <a
                    href={`https://www.reddit.com${post.data.permalink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link text-decoration-none text-end"
                  >
                    Read more...
                  </a>
                </p>
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
