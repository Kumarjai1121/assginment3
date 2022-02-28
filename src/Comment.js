import React from "react";
import { useEffect, useState } from "react";

function Comment({ id, postId }) {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    if (id === postId) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(
        (resp) => {
          resp.json().then((resul) => setComment(resul));
        }
      );
    }
  }, []);

  return (
    <div>
    {" "}
      {id === postId
        ? comment.map((item) => (
            <div className="comment">
              <p id="email">{item.email}</p>{" "}
              <p>{item.body}</p>{" "}
            </div>
          ))
        : null}
      {" "}
    </div>
  );
}

export default Comment;
