import { useState,useEffect } from "react";
import Comment from "./Comments";

const Posts = ({ item }) => {
  const [comment, setComment] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${item.id}`
    ).then((resp) => {
      resp.json().then((resul) => setComment(resul));
    });
  }, []);

  return (
    <div className="color2">
      <div id="title">{item.title}</div>
      <div id="body">{item.body}</div>
      <div>
        <button id="btn" onClick={() => setShow(!show)}>
          {show ? "Hide Comment" : "Show Comment"}
        </button>
        {show ? <Comment comment={comment} /> : null}
      </div>
    </div>
  );
};

export default Posts;