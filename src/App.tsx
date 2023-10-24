import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Home from "./pages/Home/Home";
import UserHome from "./pages/UserHome/UserHome"
import aside_links from "./helpers/asideLinks"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Aside aside_links={aside_links} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="id/:userId" element={<UserHome />} />
        </Routes>
			</main>
    </div>
  )
}
