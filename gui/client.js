// const setButton = document.getElementById('btn')
// const titleInput = document.getElementById('title')

// setButton.addEventListener('click', () => {
//     // const title = titleInput.value
//     // window.electronAPI.setTitle(title)
// })

const openMenu = document.querySelector(".menu-button#open")
const buttonDiv = document.getElementById("button-div")

openMenu.addEventListener("click", () => {
    let display = buttonDiv.style.display
    if(display == "none") display = "flex"
    if(display == "flex") display = "none"
})