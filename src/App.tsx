import './App.css';
import './components/WindowControls.css';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { FaWindowMinimize, FaWindowMaximize, FaWindowClose } from 'react-icons/fa';

const appWindow = getCurrentWindow();

function App() {
  const minimizeWindow = async () => {
    return await appWindow.minimize();
  };

  const maximizeWindow = async () => {
    return await appWindow.toggleMaximize();
  };

  const closeWindow = async () => {
    return await appWindow.close();
  };

  return (
    <main>
      <div className="app-container">
        <div data-tauri-drag-region className="window-controls">
          <button onClick={minimizeWindow} className="window-control-btn minimize">
            <FaWindowMinimize />
          </button>
          <button onClick={maximizeWindow} className="window-control-btn maximize">
            <FaWindowMaximize />
          </button>
          <button onClick={closeWindow} className="window-control-btn close">
            <FaWindowClose />
          </button>
        </div>
      </div>
      <div className="content-container"></div>
    </main>
  );
}

export default App;
