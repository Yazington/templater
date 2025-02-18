import "./App.css";
import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();

function App() {
  const minimizeWindow = async ()=>{
    return appWindow.minimize()
  }

  const maximizeWindow = async ()=>{
    return appWindow.toggleMaximize()
  }

  const closeWindow = async ()=>{
    return appWindow.close()
  }

  return (
    <main>
      <div>test</div>
    </main>
  );
}

export default App;
