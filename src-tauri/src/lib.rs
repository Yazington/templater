// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Builder;

pub fn run() {
    Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
