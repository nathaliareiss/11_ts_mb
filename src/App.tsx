import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
//desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring ,{Category} from './components/Destructuring';
//aula useState no ts
import State from './components/State';

//TYPES
type textOrNull =string | null;




function App() {


//types
const myText:textOrNull = "Tem algum texto aqui"
let mySecondText: textOrNull = null

  return (
    <div className="App">
    <h1>TS com re</h1>

     <FirstComponent />
     <SecondComponent name="segundo" />
     <div><Destructuring 
     title="Primeiro post"
     content="Algum conteudo"
     comentsQty={10}
     tags={["ts,js"]}  
    category={Category.P}
     /></div>
      <Destructuring 
     title="Segundo post"
     content="Mais outro conteudo"
     comentsQty={10}
     tags={["Python"]}  
    category={Category.TS}

   />
    </div>
   
  );
}
   
export default App;
