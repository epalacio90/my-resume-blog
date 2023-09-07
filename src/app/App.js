import * as React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import NavBar  from "./components/NavBar";
import Blog from "./views/Blog";
import Entry from "./views/Entry";
import Login from './views/Login'


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/entry/:entry_id" element={<Entry />} />
              <Route path="/login"  element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;



