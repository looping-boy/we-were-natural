import logo from './logo.svg';
import './App.css';
import { HomePage } from './HomePage';
import { Questions } from './Questions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage className = "back"/>
        <Questions className = "front"/>
      </header>
    </div>
  );
}

export default App;
