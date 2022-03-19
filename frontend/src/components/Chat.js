import { useState, useEffect, useCallback } from 'react'
import { socket } from "../context/socket"

const Chat = () => {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log(data)
    })
  }, [])

  useEffect(() => {
    socket.on("allUsers", (data) => {
      setUsersList(data)
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
      <ul>
        {usersList.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
      <button onClick={sendMessage}>Send test message</button>
    </div>
  )
}

export default Chat