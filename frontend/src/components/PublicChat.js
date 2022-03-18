import { useState, useEffect, useCallback } from 'react'
import { socket } from "../context/socket"

const Chat = () => {

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log(data)
    })
  }, [])

  const sendMessage = useCallback(async () => {
    let contentMsg = {
      room: "general",
      content: {
        user: "testUser",
        message: "test"
      }
    }
    await socket.emit("sendMessage", contentMsg)
  }, [])

  return (
    <div>Chat
      <button onClick={sendMessage}>Send test message</button>
    </div>
  )
}

export default Chat