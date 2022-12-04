import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Dashboard from './components/pages/admin/Dashboard'
import Error404 from './components/pages/user/Error404'
import Home from './components/pages/user/Home'
import Login from './components/pages/user/Login'
import ProtectedAdmin from './components/pages/user/ProtectedAdmin'

const App = () => {
  return (
    <div>
<BrowserRouter>
    <Header/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route element={<ProtectedAdmin/>}>
              <Route path="/admin" element={<Dashboard />} />
          </Route>
          <Route path='*' element={<Error404/>} />

          </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App