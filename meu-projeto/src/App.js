import './App.css';
import HelloWorld from './components/HelloWorld';//Importando nosso primeiro componente react
import SayMayName from './components/SayMayName';

function App() {
  const name = "Maycon Nascimento de Oliveira";

  // const newName = name.toUpperCase();

  // function sum(a, b){
  //   return a+b;
  // }

  // const url = "https://via.placeholder.com/150";
  
  return (
    <div className="App">
      {/* <h1>Alterando JSX</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" /> */}
      <HelloWorld />
      <SayMayName nome="Matheus" />
      <SayMayName nome="João" />
      <SayMayName nome={name} />

    </div>
  )
}

export default App;
