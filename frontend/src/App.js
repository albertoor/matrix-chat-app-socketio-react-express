import React from 'react'
import PublicChat from './components/PublicChat'
import { socket } from './context/socket'

const App = () => {

  // Join to general chat
  const joinChat = () => {
    socket.emit("general", "general")
  }

  return (
    <div>Chat app
      <p>It's
        <button onClick={joinChat}>Join to chat</button>
      </p>
      <PublicChat />
    </div>
  )
}

export default App;