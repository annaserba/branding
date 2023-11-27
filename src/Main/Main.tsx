import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import { PSBElement } from "../psb/PSBElement";
const Home = () => {
  return <></>
}
export const Main = (): JSX.Element => {
  return <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="psb">PSB</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="psb" element={<PSBElement />}></Route>
        </Routes>
      </div>
    </div>
};