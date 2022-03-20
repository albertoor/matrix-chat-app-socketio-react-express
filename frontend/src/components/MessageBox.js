import React from 'react'
import { Heading, HStack, Text, Box } from "@chakra-ui/react"

const MessageBox = ({ usernameVal, messageVal, dateVal }) => {
  return (
    <Box
      border={"2px solid var(--matrixColor)"}
      m={2}
      p={2}
      borderRadius="1px 10px 10px 10px"
      BoxDir={"column"}
    >
      <Heading as={'h5'} fontSize="md">
        {usernameVal}
      </Heading>
      <HStack>
        <Text>
          {messageVal}
        </Text>
        <Text pt={5} marginRight={4} fontSize='xs'>{dateVal}</Text>
      </HStack>
    </Box>
  )
}

export default MessageBox;
