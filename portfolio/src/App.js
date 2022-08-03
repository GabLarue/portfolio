import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const projects = axios.get('http://localhost:8080/projects')

  if(projects) {
    console.log(projects)

    return (
      <div>
        <span>The projects were fetched</span>
      </div>
    )
  }

  return (
    <div>
      <span>The projects are being fetch</span>
    </div>
  );
}

export default App;
