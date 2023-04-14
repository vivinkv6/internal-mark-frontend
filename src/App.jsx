import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import AdminDashboard from "./pages/AdminDashboard";
import UserPage from "./pages/UserPage";
import AdminForm from "./components/AdminForm";
import Footers from "./components/Footers";
import AddResult from "./components/AddResult";
import Updates from "./components/Updates";
import SearchResult from "./components/SearchResult";
import SelectDeptSem from "./components/SelectDeptSem";
import UpdateResult from "./components/UpdateResult";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<UserPage />} />
          <Route path="/result" element={<SearchResult/>} />
          <Route  path="admin" element={<AdminForm />} />
          <Route path="admin/addresult" element={<AddResult />} />
          <Route path="admin/updates" element={<Updates />} />
          <Route  path="admin/selection" element={<SelectDeptSem/>} />
          <Route exact path="admin/selection/:department/:semester/dashboard" element={<AdminDashboard/>} />
          <Route  path="/:id" element={<UpdateResult/>} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </div>
  );
}

export default App;
