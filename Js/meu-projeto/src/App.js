import HelloWorld from './component/HelloWorld';
import SayMyName from './component/SayMyName';
import './App.css';


function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <br></br>
      <SayMyName nome = "Kevin"/>
    </div>
  );
}

export default App;
