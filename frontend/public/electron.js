const electron = require("electron");
const { PythonShell } = require("python-shell");
const path = require("path");
const exec = require("child_process").execFile;
const process = require("process");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // If local or dev, run flask app with python
  const { BIO_MODE } = process.env;
  if (BIO_MODE === "LOCAL" || BIO_MODE === "DEV") {
    const options = {
      pythonPath: path.resolve(
        "/Users/Ryan/.virtualenvs/backend-xwC3nyTg/Scripts/python.exe"
      ),
      scriptPath: "../backend/api",
    };

    PythonShell.run("app.py", options, function (err, results) {
      if (err) {
        console.log(err);
      }
    });
    // if release, call built python executable from unpacked resources
  } else {
    exec(
      "app.exe",
      { cwd: "resources/app.asar.unpacked/dist" },
      (err, results) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }

  mainWindow = new BrowserWindow({ width: 1200, height: 800 });

  // if local or dev, assume react app running with yarn start and load
  if (BIO_MODE === "LOCAL" || BIO_MODE === "DEV") {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
    // if release, project has been built, load from unpacked resources
  } else {
    mainWindow.loadFile("../app.asar.unpacked/dist/index.html");
  }

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
