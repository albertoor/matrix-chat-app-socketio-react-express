import React from 'react'
import { Box, Flex, Input, FormControl, Button, IconButton, HStack } from '@chakra-ui/react'
import { BiSend } from "react-icons/bi"

const ChatBox = () => {
  return (
    <Flex flexDir={"column"} justifyContent={"space-between"} w={"70%"} color={"var(--matrixColor)"}>
      <Box>
        ChatMessage
      </Box>
      <Box bg={"black"} p={4}>
        <form>
          <HStack >
            <FormControl  >
              <Input
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
              icon={<BiSend />}
              bg={"black"}
              colorSchema="var(--matrixColor)"
              border={"2px solid var(--matrixColor);"}
              _hover={{
                color: "none"
              }}
            />
          </HStack>
        </form>

      </Box>
    </Flex >
  )
}

export default ChatBox