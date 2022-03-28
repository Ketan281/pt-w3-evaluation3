
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Home} from './Components/Home';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout'
import {Navbar} from './Components/Navbar';
import {Products} from './Components/Products'
import{Register} from './Components/Register'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/Home' element={<Home/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Products' element={<Products/>}/>
       <Route path='/Logout' element={<Logout/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
