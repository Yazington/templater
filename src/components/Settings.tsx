import { getAllWindows } from '@tauri-apps/api/window';
import { FaWindowMinimize, FaWindowClose } from 'react-icons/fa';

function Settings() {
  const minimizeWindow = async () => {
    const allWindows = await getAllWindows();
    const settingsWindow = allWindows.find((w) => w.label === 'settings');
    await settingsWindow?.minimize();
  };

  const closeWindow = async () => {
    const allWindows = await getAllWindows();
    const settingsWindow = allWindows.find((w) => w.label === 'settings');
    await settingsWindow?.hide(); // Hide instead of close to maintain window instance
  };

  return (
    <main>
      <div className="app-container">
        <div data-tauri-drag-region className="window-controls">
          <button onClick={minimizeWindow} className="window-control-btn minimize">
            <FaWindowMinimize />
          </button>
          <button onClick={closeWindow} className="window-control-btn close">
            <FaWindowClose />
          </button>
        </div>
      </div>
      <div className="content-container">
        <h1>Overview</h1>
        {/* List content will be added here */}
      </div>
    </main>
  );
}

export default Settings;
