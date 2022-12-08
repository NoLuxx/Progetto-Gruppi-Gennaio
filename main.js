const {app, BrowserWindow, ipcMain} = require("electron")
const path = require("path")

function createWindow () {
  const mainWindow = new BrowserWindow({
      webPreferences: {
          preload: path.join(__dirname, "preload.js")
      }
  })

  ipcMain.handle("getData", async (event, args) => {
    return new Promise((resolve, reject) => {
      console.log(args)
      if (true) {
          resolve("this worked!")
      } else {
          reject("this didn't work!")
      }
    })
  })

  mainWindow.loadFile(path.join(__dirname, "gui/index.html"))
}

app.whenReady().then(() => {
  createWindow()
  
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== 'darwin') app.quit()
})