import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Dashboard from './components/pages/admin/Dashboard'
import Home from './components/pages/user/Home'

const App = () => {
  return (
    <div>
<BrowserRouter>
    <Header/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/admin' element={<Dashboard/>}/>

          </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App