import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Flights from './Pages/Flights/Flights'
import Login from './Pages/login/LoginForm';
import Reserve from './components/Reserve/Reserve';

import Register from './Pages/register/Register';




const app = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flights' element={<List/>} />
        <Route path='/flights/:id' element={<Flights/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} /> 
        <Route path='/reserve' element={<Reserve/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default app;