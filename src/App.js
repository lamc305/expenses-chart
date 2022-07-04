import './App.css';
import Attribution from './components/Attribution';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header balance={921.48}/>
      <Main/>
      <Attribution/>
    </div>
  );
}

export default App;
