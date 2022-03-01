import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      resp.json().then((result) => setData(result));
    });
  }, []);

  return (
    <div className="color1">
      <div id="heading">POSTS</div>
      {data.map((item) => (
        <Posts item={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;