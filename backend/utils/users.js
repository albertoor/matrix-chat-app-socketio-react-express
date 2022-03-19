const users = []

function join(id, username) {
  const idExist = users.some(user => user.id === id)
  let user
  if (!idExist) {
    user = { id, username }
    users.push(user)
  }
}

function getUsers() {
  return users
}

module.exports = { join, getUsers }