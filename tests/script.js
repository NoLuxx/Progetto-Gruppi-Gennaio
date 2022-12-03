const btnGet = document.getElementById("get")
const btnPost = document.getElementById("post")
const input = document.getElementById("input")

btnGet.addEventListener("click", getInfo)
btnPost.addEventListener("click", postInfo)

const url = "http://localhost:8080/" // standard è anche definito nel metodo get del server
async function getInfo(e)
{
    e.preventDefault()
    //get request al server che manda indietro un package
    //invio anche un parametro ("Luca") e una query ("key=123") separati da ?
    const res = await fetch(url + "standard/Luca?key=123", { 
        method: "GET"
    })
    const data = await res.json() //converte il package ricevuto (string) in json
    input.value = data.text //imposta il testo dell'input con l'attributo text ("testo standard")
}

async function postInfo(e)
{
    e.preventDefault()
    if(input.value == "") return
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"  //Tipo di dati che saranno inviati al server
        },
        body: JSON.stringify({
            parcel: input.value   //input.value sarà inviato al server (payload)
        })
    })
}