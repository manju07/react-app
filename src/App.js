import './App.css';
import NewComponent from './component/NewComponent';
import FunctionComponent from './component/FunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewComponent data="manju" />
        <FunctionComponent />
      </header>
    </div>
  );
}

export default App;
