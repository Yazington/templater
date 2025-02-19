// import { useState, useEffect } from "react";
// import { listen } from "@tauri-apps/api/event";
// import { TrayIcon} from '@tauri-apps/api/tray';
// import { Menu } from '@tauri-apps/api/menu';

// function onTrayMenuClick(itemId) {
//   // itemId === 'quit'
// }

// const menu = await Menu.new({
//   items: [
//     {
//       id: 'quit',
//       text: 'Quit',
//       action: onTrayMenuClick,
//     },
//   ],
// });

// const options = {
//   menu,
//   menuOnLeftClick: true,
// };

// const tray = await TrayIcon.new(options);

// function Tray() {
//   const [visible, setVisible] = useState(tray.);

//   useEffect(() => {
//     // Listen for window visibility toggle
//     const unlisten = listen("toggle-ui", () => {
//       setVisible((prev) => !prev);
//     });

//     return () => {
//       unlisten.then((f) => f());
//     };
//   }, []);

//   return (
//     visible && (
//       <div className="Tray">
//         <h1>Tray Tray UI</h1>
//         <button onClick={() => invoke("toggle_window")}>Toggle Window</button>
//       </div>
//     )
//   );
// }

// export default Tray;
