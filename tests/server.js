const express = require("express")
const app = express()
const port = 8080

//npm i express
//npm i nodemon --save-dev

app.use(express.static("gui"))
app.use(express.json())

app.get("/standard/:dynamic", (req, res) => { //GET routes
    const {dynamic} = req.params
    const {key} = req.query
    console.log(dynamic, key)      //stampa le informazioni mandate in più durante la GET request (destrutturando )
                                 //il parametro "dynamic"
    res.status(200).json({text: "testo standard"}) //client get request => backend manda questo package
})

app.post("/", (req, res) => { //POST routes
    const {parcel} = req.body //richiesta dal client (input.value)
    console.log(parcel)
    if(!parcel) return res.status(400).send({status: "failed"})
    res.status(200).send({status: "recieved"})
})

app.listen(port, () => console.log(`Server avviato alla porta: ${port}`))
