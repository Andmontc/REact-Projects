import React, { useState, useEffect } from 'react';
import Ask from './components/ask';
import Formulario from './components/form';
import Lista from './components/gastos';
import Control from './components/control';

function App() {
  // Definir states
  const [budget, saveBudget] = useState(0);
  const [restante, saveRestante] = useState(0);
  const [showask, updateAsk] = useState(true);
  const [gastos, saveGasto] = useState([]);
  const [gasto, saveGastos] = useState({});
  const [creagasto, crearGasto ] = useState(false);
  //useEffect to update
  useEffect(() => {
    if(creagasto){
    saveGasto([
      ...gastos,
      gasto
    ]);
    const leftbudget = restante - gasto.canti
    saveRestante(leftbudget);
    crearGasto(false);
    }
  },[gasto, creagasto, gastos, restante])

  return (
    <div className="container">
      <header> 
        <h1> Weekly Expense </h1>
        <div className="contenido-principal contenido">
          {showask ? (
             <Ask 
             saveBudget={saveBudget}
             saveRestante={saveRestante}
             updateAsk={updateAsk}
           />) : (
             <div className="row">
              <div className="one-half column">
                <Formulario 
                  saveGastos={saveGastos}
                  crearGasto={crearGasto}
                />
              </div>
              <div className="one-half column">
                <Lista 
                  gastos={gastos}
                />

                <Control 
                  budget={budget}
                  restante={restante}
                />
              </div>
           </div>
           )
          }
        </div>
      </header> 
    </div>
  );
}

export default App;
