import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import PrivateRouteuser from './Components/PrivateRoute/Private'
import { Provider } from 'react-redux'
import store from './Store'
import GoatPage from './pages/goatPage/GoatPage'
import GoatPalak from './pages/Goatpalak/Goatpalak'
import Goat from './pages/individualGoat/Goat'
import Sidebar from './Components/sidebar/Sidebar'

function App() {

  return (
    <>
    <Provider store={store}>
    <Sidebar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='' element={<PrivateRouteuser />} >
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path='/goatPalak' element={<GoatPalak/>} />  
      <Route path='/goatPalak/:id' element={<GoatPage/>} />
      <Route path='/goat/:id' element={<Goat/>} />
      </Route>
    </Routes>
    </Provider>
    </>
  )
}

export default App
