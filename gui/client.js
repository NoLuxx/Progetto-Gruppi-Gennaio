const input = document.getElementById("open-file")

const port = 8080
const baseUrl = "http://localhost:" + port + "/"

input.addEventListener("change", iEvent => {
    const file = iEvent.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")

    reader.addEventListener("load", async rEvent => {
        rEvent.preventDefault()
        let text = rEvent.target.result
        if(text == "") return
        const res = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                parcel: text
            })
        })
    })
})