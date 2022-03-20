import React, { useState, useCallback } from 'react'
import { socket } from "../context/socket"
import { Center, Heading, Flex, FormControl, Button, Input } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const ChatForm = () => {
  const [username, setUsername] = useState("")
  const navigate = useNavigate();

  // Join to general chat
  const joinChat = useCallback((e) => {
    e.preventDefault()
    const data = "general"
    socket.emit("join", data)
    setUsername("")
    navigate("/chat", {
      state: { username }
    })
  }, [username, navigate])

  return (
    <Center bg={"black"} h="100vh" w="100%" color="var(--matrixColor)">
      <Flex flexDir={"column"} justifyContent={"center"} >
        <Heading>Welcome To Matrix Chat</Heading>
        <form onSubmit={(e) => joinChat(e)}>
          <FormControl mt={4}>
            <Input id='first-name' placeholder='Please enter your username'
              color={"var(--matrixColor)"}
              border={"none"}
              _focus={{
                outline: "none !important",
                border: "1px solid var(--matrixColor)",
                boxShadow: "0 0 10px var(--matrixColor)",
              }}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormControl>
          <Button
            w={"100%"}
            mt={4}
            type='submit'
            bg={"var(--matrixColor)"}
            color={"black"}
            _hover={{
              color: "white"
            }}
          >Join to chat</Button>
        </form>
      </Flex>
    </Center>
  )
}

export default ChatForm