import React from 'react'
import { Box } from '@chakra-ui/react'

const User = ({ username, id }) => {

  return (
    <Box p={3} m={3} border={"1px solid var(--matrixColor)"}>
      {username}
    </Box>
  )
}

export default User
