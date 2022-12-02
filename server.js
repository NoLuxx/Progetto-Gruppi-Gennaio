const express = require("express")
const fs = require("fs")

const server = express()
const port = 8080

server.use(express.static("gui"))
server.use(express.json())

server.post("/", (req, res) => {
    const {parcel} = req.body
    console.log(parcel)
    if(!parcel) return res.status(400).send({status: "failed"})
    res.status(200).send({status: "recieved"})
})

server.listen(port, () => console.log(`Server avviato alla porta ${port}`))