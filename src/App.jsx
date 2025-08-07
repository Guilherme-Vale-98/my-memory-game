import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';


function App() {
  const [isMenu, setIsMenu] = useState(true)


  return (
    <div className="App flex flex-wrap place-content-center">
      <Title/>
      {isMenu? <Menu setIsMenu={setIsMenu}/>: <Board/>}
      
    </div>
  )
}

export default App;
