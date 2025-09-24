import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import UpdateItem from "./components/UpdateItem";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
