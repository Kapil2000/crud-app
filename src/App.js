import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import {Users} from "./users";
import {useState} from "react";

function App() {

  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item)=> item.first_name.toLowerCase().includes(query));
  };
  return (
    <>
      <Navbar />
      <input
            className=" search ms-3 mt-3"
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
      <Routes>      
        <Route exact path="/" element={<Home data={search(Users)}/>}/>
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/edit/:id" element={<Edit/>} />
        <Route exact path="/view/:id" element={<Details/>} />
      </Routes>

    </>
  );
}

export default App;
