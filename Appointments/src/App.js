import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/formulario';
import Cita from './components/cita';


function App() {
  // localstorage
  let initcitas = JSON.parse(localStorage.getItem('citas'));
  if (!initcitas){
    initcitas = [];
  }
  // citas's array
  const [citas, saveCitas] = useState(initcitas);

  useEffect (() => {
    let initcitas = JSON.parse(localStorage.getItem('citas'));
    if(initcitas){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  // funcion para actualizar
  const makeCita = cita => {
    saveCitas([
      ...citas,
      cita
    ]);
  }

  // Funcion para eliminar
  const eliminateCita = id => {
    const newCita = citas.filter(cita => cita.id !== id);
    saveCitas(newCita);
  }
  const mensaje = citas.length === 0 ? 'No Appointments' : 'Appointments';
  return (
    <Fragment>
    <h1> Patient Appoinments</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
           <Formulario 
            makeCita={makeCita}/> </div>
          <div className="one-half column">
            <h2>{mensaje}</h2>
            {citas.map(cita => (
              <Cita 
                key = {Cita.id}
                cita={cita}
                eliminateCita={eliminateCita}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
