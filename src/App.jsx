import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import AdminForm from "./components/AdminForm";
import Footers from "./components/Footers";
import AddResult from "./components/AddResult";
import Updates from "./components/Updates";
import SearchResult from "./components/SearchResult";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<UserPage />} />
          <Route path="/result" element={<SearchResult/>} />
          <Route path="admin" element={<AdminForm />} />
          <Route path="admin/access" element={<AdminPage />} />
          <Route path="admin/addresult" element={<AddResult />} />
          <Route path="admin/updates" element={<Updates />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </div>
  );
}

export default App;
