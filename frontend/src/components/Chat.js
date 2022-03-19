import { useState, useEffect, useCallback } from 'react'
import { socket } from "../context/socket"
import Sidebar from "./Sidebar"
import { Flex } from "@chakra-ui/react"

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
    <Flex justifyContent={"space-between"}>
      <Sidebar usersList={usersList} />
      {/* <button onClick={sendMessage}>Send test message</button> */}
    </Flex>
  )
}

export default Chat