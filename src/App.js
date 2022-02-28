import React, { useState, useEffect } from "react";
import Comment from "./Comment";
function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState({ postId: null, showComment: false });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      resp.json().then((result) => setData(result));
    });
  }, []);

  return (
    <div className="color1">
      <div id="heading">POSTS {show.showComment.toString()}</div>{" "}
      {data.map((item) => (
        <div className="color2" key={item.id}>
         <div id="title">{item.title}</div>{" "}
          <div id="body">{item.body}</div>{" "}
          <div>
            {" "}
            <button
              id="btn"
              onClick={() =>
                setShow({ postId: item.id, showComment: !show.showComment })
              }
            >
            {" "}
              {show.showComment && show.postId === item.id
                ? "Hide Comment"
                : "Show Comment"}
            {" "}
            </button>
          {" "}
            {show.showComment ? (
              <Comment id={item.id} postId={show.postId} />
            ) : null}
          {" "}
          </div>
          {" "}
        </div>
      ))}
    {" "}
    </div>
  );
}

export default App;
