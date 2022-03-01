import React from "react";

function Comments({ comment }) {
  console.log(comment);
  return (
    <div>
      {comment.map((item) => (
        <div key={item.id} className="comment">
          <p id="email">{item.email}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;