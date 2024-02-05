import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './components/navigation.jsx'
import ProductPage from './pages/productpage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
   
    <ProductPage/>
  
  </React.StrictMode>,
)
