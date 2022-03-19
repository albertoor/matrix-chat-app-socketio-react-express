import React from 'react'
import { Box, Flex, Heading, List } from '@chakra-ui/react'
import UsersList from './UsersList'

const Sidebar = ({ usersList }) => {
  return (
    <Box w={"30%"} h={"100vh"} bg={"black"} color={"var(--matrixColor)"} borderRight={"5px solid var(--matrixColor)"}>
      <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
        <Heading size={"xl"} pt={4}>Matrix Chat</Heading>
        <Heading size={"md"} pt={4}>Users Connected</Heading>
        <List w={"100%"}>
          <UsersList usersList={usersList} />
        </List>
      </Flex>
    </Box>
  )
}

export default Sidebar