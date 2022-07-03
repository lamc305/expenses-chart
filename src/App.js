import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header balance={921.48}/>
      <Main/>
    </div>
  );
}

export default App;
