import React from 'react'
import { Box } from "@chakra-ui/react"
import User from './User';

const UsersList = ({ usersList }) => {
  return (
    <>
      {
        usersList.map((user, index) => (
          <li key={index}>
            <User
              username={user.username}
              id={user.id}
            />
          </li>
        ))
      }
    </>
  )
}
export default UsersList;
