import './App.css';
import HelloWorld from './component/HelloWorld';
import Pessoa from './component/Pessoa';
import SayMyName from './component/SayMyName';
import Frase from './component/Frase';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
  
      <Frase />
      <Frase />
      
      <SayMyName nome = "Kevin"/>
      <SayMyName nome = "Aoba"/>
      <SayMyName nome = {nome}/>
      <Pessoa nome = "Kevin" idade = "18" profissao = "Programador" foto = "https://via.placeholder.com/150"/>

    </div>
  );
}

export default App;
