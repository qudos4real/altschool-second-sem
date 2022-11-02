
import './App.css';


const [githubData, setGithubData] = useState({});
const [username, setUsername] = useState("Qudos4real");

const getGithubData = async () => {
  const response = await fetch("https://api.github.com/users/${username}");
  const data = await response.json();
  setGithubData(data);
};

useEffect(() => {
  getGithubData();
}, []);

return (
  <div>
    <h1>{githubData.name}</h1>
    <img src={githubData.avatar_url} alt="avatar" />
  </div>
);

const [githubData, setGithubData] = useState({});

const getGithubData = async () => {
  const response = await fetch("https://api.github.com/users/username");
  const data = await response.json();
  setGithubData(data);
};

useEffect(() => {
  getGithubData();
}, []);

return (
  <div>
    <h1>{githubData.name}</h1>
    <img src={githubData.avatar_url} alt="avatar" />
  </div>
);

const [githubData, setGithubData] = useState({});

const getGithubData = async () => {
  const response = await fetch("https://api.github.com/users/username");
  const data = await response.json();
  setGithubData(data);
};

useEffect(() => {
  getGithubData();
}, []);

return (
  <div>
    <h1>{githubData.name}</h1>
    <img src={githubData.avatar_url} alt="avatar" />
  </div>
);

const [githubData, setGithubData] = useState({});

const getGithubData = async () => {
  const response = await fetch("https://api.github.com/users/username");
  const data = await response.json();
  setGithubData(data);
};

useEffect(() => {
  getGithubData();
}, []);

return (
  <div>
    <h1>{githubData.name}</h1>
    <img src={githubData.avatar_url} alt="avatar" />
  </div>
);

const [githubData, setGithubData] = useState({});

const getGithubData = async () => {
  const response = await fetch("https://api.github.com/users/username");
  const data = await response.json();
  setGithubData(data);
};

useEffect(() => {
  getGithubData();
}, []);

return (
  <div>
    <h1>{githubData.name}</h1>
    <img src={githubData.avatar_url} alt="avatar" />

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
