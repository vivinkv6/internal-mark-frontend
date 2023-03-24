import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbars from './components/Navbars';
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
     <Routes>
     <Route path='/' element={<UserPage/>}/>
      <Route path='admin' element={<AdminPage/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
