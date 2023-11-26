import React from 'react';
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Buttom from "./pages/materialui/Buttom";
import Template from "./pages/materialui/Template";

function App() {
  return (
    <div className="App">
     
      <Template />
      <Header />
      <Buttom />
      <ListarTarefa />     
    
    </div>
  );
}

export default App;
