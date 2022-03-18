const express = require("express")
const app = express()
const port = process.env.PORT || 8000

const server = require("http").createServer(app).listen(port, () => {
  console.log(`Server running at port: ${port}`)
})

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  }
})
const cors = require("cors")

const { join, getUsers } = require("./utils/users")

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
}

// middleware
app.use(cors(corsOptions))

// socket to communication channel between the client and the server
const getSomeEmit = socket => {
  const response = new Date() // this is a timestamp
  socket.emit("fromAPI", response)
}

// API endpoit
app.get("/", (req, res) => res.status(200).json({ message: "Hello from server" }))

// socket io
io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`)

  // join to general chat
  socket.on("general", (data) => {
    socket.join(data)
    console.log("User Joined To " + data)
  })

  // send broadcast message to general
  socket.on("sendMessage", (data) => {
    console.log(data)
    socket.to("general").emit("receiveMessage")
  })

  // Disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})


