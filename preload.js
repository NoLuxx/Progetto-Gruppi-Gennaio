const {contextBridge, ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld(
    "electronAPI", {
        invoke: (channel, data) => {
            let validChannels = ["getData"] // list of ipcMain.handle channels you want access in frontend to
            if (validChannels.includes(channel)) {
                // ipcRenderer.invoke accesses ipcMain.handle channels like 'getData'
                // make sure to include this return statement or you won't get your Promise back
                return ipcRenderer.invoke(channel, data)
            }
        },
    }
)