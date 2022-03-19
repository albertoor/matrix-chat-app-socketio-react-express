import React from 'react'
import { Routes, Route } from "react-router-dom"
import ChatForm from './components/ChatForm'
import Chat from "./components/Chat"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<ChatForm />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App;