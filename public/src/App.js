import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Targetpage from './pages/Targetpage';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/targetpage" element={<Targetpage />} />
        {/* <Route path="/" element={<Chat />} /> */}
        {/* search ki agar ham ordereing change akr denge to kya hoga */}
      </Routes>
    </BrowserRouter>
  );
}
