import { app, BrowserWindow } from 'electron';
import { logger } from 'src/callbacks/logger';

function createWindow() {
  logger();
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('index.html');
}

app.on('ready', createWindow);
