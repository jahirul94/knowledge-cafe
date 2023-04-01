import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Cart from './component/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './component/Blog/Blog'

function App() {
  return (
    <div className="App">
         <Header></Header>
         <Cart></Cart>
         <Blog></Blog>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
