// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Builder;

fn main() {
    Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
