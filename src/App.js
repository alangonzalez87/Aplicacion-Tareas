/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import appLogo from './imagenes/app tareas.png'


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
        src={appLogo}
        className='logo' />
      </div>
      <div className='tareas-lista-principal'>
          <h1>
            Mis tareas
          </h1>
          <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
