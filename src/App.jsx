import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbars from './components/Navbars';
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import AdminForm from './components/AdminForm';
import Footers from './components/Footers';
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
      <Footers/>
      </BrowserRouter>
    </div>
  )
}

export default App
