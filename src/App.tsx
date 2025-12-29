import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
//desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring ,{Category} from './components/Destructuring';
//aula useState no ts
import State from './components/State';
import { createContext } from 'react';
//usando contexto
import Context from './components/Context';


//TYPES
type textOrNull =string | null;


//context
interface IAppContext{
  language:string;
  framework:string;
  projects:number;
}

export const AppContext = createContext<IAppContext | null>(null); 


function App() {

//types
// const myText:textOrNull = "Tem algum texto aqui"
// let mySecondText: textOrNull = null

//context
const contextValue ={
  language:"JavaScript",
  framework:"Express",
  projects:5,
};


  return (
    <AppContext.Provider value={contextValue} >
    <div className="App">
    <h1>TS com re</h1>

     <FirstComponent />
     <SecondComponent name="segundo" />
     <div><Destructuring 
     title="Primeiro post"
     content="Algum conteudo"
     comentsQty={10}
     tags={["ts","js"]}  
    category={Category.P}
     /></div>
      <Destructuring 
     title="Segundo post"
     content="Mais outro conteudo"
     comentsQty={10}
     tags={["Python"]}  
    category={Category.TS}
/>
  <Context />
    </div>
   </AppContext.Provider>
  );

}
export default App;
