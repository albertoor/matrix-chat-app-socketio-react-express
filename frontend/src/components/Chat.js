import { useState, useEffect, useCallback } from 'react'
import { socket } from "../context/socket"
import { Box, Flex, Input, FormControl, Text, List, ListItem, Center, VStack, IconButton, HStack, Heading, ListIcon } from '@chakra-ui/react'
import { BiSend } from "react-icons/bi"
import { useLocation } from 'react-router-dom'

const Chat = () => {
  const [message, setMessage] = useState("")
  const [messageList, setMessageList] = useState([])
  const location = useLocation()
  const username = location.state.username

  // Listen message from server
  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message)
    })
  }, [])


  // liste for receive message
  useEffect(() => {
    socket.on("receiveMessage", (content) => {
      console.log(content)
      setMessageList([...messageList, content])
    })
  }, [messageList])


  // Submit new message
  const submitMessage = useCallback((e) => {
    e.preventDefault()
    const content = { username, message, date: new Date() }
    if (message !== "") {
      socket.emit("sendMessage", content)
      setMessageList([...messageList, content])
      setMessage("")
    } else
      alert("Please enter a new message")
  }, [message, username, messageList])

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"space-between"}
      w={"100%"}
      h={"100vh"}
      color={"var(--matrixColor)"}
      bg="black"
    >
      <Box>
        <Center p={6} borderBottom={"2px solid green"}>
          <VStack>
            <Heading as='h2' size='md'>
              Hello '{username}'
            </Heading>
            <Heading as='h2' size='md'>
              Welcome to Matrix Chat
            </Heading>
          </VStack>
        </Center>
      </Box>

      <Box h="100%" p={4}>
        <Flex>
          <List>
            {messageList.map((value, key) => (
              <ListItem key={key}>
                <Box border={"2px solid var(--matrixColor)"} m={2} p={2} borderRadius="12px 12px 4px 12px">
                  {value.username} : {value.message}
                </Box>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Box>

      {/* Box to send message  */}
      <Box bg={"black"} p={4}>
        <form onSubmit={(e) => submitMessage(e)}>
          <HStack >
            <FormControl>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Enter Message'
                borderWidth={"0 0 2px"}
                borderColor={" var(--matrixColor)"}
                fontSize={"30px"}
                p={4}
                _focus={{ outline: "0 !important" }}
                _hover={{ borderColor: "none" }}
                _placeholder={{ color: "var(--matrixColor)" }}
              />
            </FormControl>
            <IconButton
              type='submit'
              icon={<BiSend />}
              bg={"black"}
              border={"2px solid var(--matrixColor);"}
              _hover={{
                color: "none"
              }}
            />
          </HStack>
        </form>
      </Box>
    </Flex>
  )
}

export default Chat