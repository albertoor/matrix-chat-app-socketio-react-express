import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './components/Login'
import Chat from "./components/Chat"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} exact />
    </Routes>
  )
}

export default App;