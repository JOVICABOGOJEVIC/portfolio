import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Menu from './components/Menu/Menu';
import Portfolio from './components/Portfolio/Portfolio';
import TopBar from './components/Topbar/TopBar';
import Works from './components/Works/Works';
import Store from './components/Store/Store';


function App() {
 const [isOpen, setOpen] = useState(false)
 const [app1, viewApp1] = useState(true)
const onOpenMenu = () =>{
  setOpen(!isOpen);
}
console.log(app1);
return (
    <div className="app">
      <TopBar handleOpenMenu={onOpenMenu} isOpen={isOpen}/>
      <Menu isOpen={isOpen} handleCloseMenu={()=>{(setOpen(false))}}/>
      <div className="sections">
<Intro />
<About />
{app1 && <Portfolio onEnterApp={()=>viewApp1(false)}/>}
{!app1 && <Store onExitApp={()=>viewApp1(true)}/>}

<Works />
      </div>
    </div>
  );
}

export default App;
