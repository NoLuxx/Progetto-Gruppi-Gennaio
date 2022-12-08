const input = document.getElementById("input")
const img = document.getElementById("img")

input.addEventListener("change", event => {
  const file = event.target.files[0]
  let reader = new FileReader()
  reader.addEventListener("load", () => {
    let arrayBuffer = new Uint8Array(reader.result)
    let blob = new Blob([arrayBuffer], {type: "image/png"})
    let urlCreator = window.URL || window.webkitURL
    let imageUrl = urlCreator.createObjectURL(blob)
    img.src = imageUrl
  })
  reader.readAsArrayBuffer(file)
})