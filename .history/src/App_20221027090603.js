import {useState, useEffect} from "react";
import './App.css';



function App() {
const [githubData, setGithubData] = useState({});
const [username, setUsername] = useState("Qudos4real");

useEffect(() => {
  async function fetchData() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setGithubData(data);
  }
  console.log("use effect called");
  fetchData();
}, [username]);
 


  return (
    <div className="App">
      <h1>githubData</h1>
    </div>
  );
}

export default App;
