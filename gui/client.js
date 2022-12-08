const btnProva = document.getElementById("btn-prova")
const parProva = document.getElementById("par-prova")

btnProva.addEventListener("click", () => {
    window.electronAPI.invoke("getData", [1,2,3])
    .then(res => {
        parProva.textContent = res
    })
    .catch(function(err) {
        parProva.textContent = err
    })
})

const openMenu = document.querySelector(".menu-button#open")
const buttonDiv = document.getElementById("button-div")

openMenu.addEventListener("click", () => {
    let display = buttonDiv.style.display
    if(display == "none") display = "flex"
    if(display == "flex") display = "none"
})