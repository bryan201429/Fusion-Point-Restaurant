import React from 'react'
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home.jsx'
import Products from './views/Products/Products.jsx';
import Contacto from './views/Contacto/Contacto.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Contacto' element={<Contacto/>}></Route>
    </Routes>
    
  </BrowserRouter>
    
  
)
