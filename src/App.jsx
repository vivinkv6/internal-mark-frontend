import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbars from './components/Navbars';
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import AdminForm from './components/AdminForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
     <Routes>
     <Route exact path='/' element={<UserPage/>}/>
      <Route path='admin' element={<AdminForm/>}/>
      <Route path='admin/control' element={<AdminPage/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
