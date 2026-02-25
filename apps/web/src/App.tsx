import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((r) => r.json())
      .then(setList);
  }, []);

  return (
    <div>
      <h1>My List</h1>
      {list.length > 0 ? (
        <ul>
          {list.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading or no data found...</p>
      )}
    </div>
  );
}

export default App;
