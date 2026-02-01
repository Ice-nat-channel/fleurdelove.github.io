// Example Firebase config (safe to commit)
// Copy this file to `admin/firebase-config.js` and replace the placeholder values
// with your project's Firebase Web SDK config from the Firebase console.

// Example usage:
// 1. Copy to admin/firebase-config.js
// 2. Replace values with your project's settings
// 3. Keep admin/firebase-config.js private (it's git-ignored by default)

window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // optional
};

// Note: This example is deliberately generic and contains no secrets.
/**
 * firebase-config.example.js
 *
 * Copy this file to `firebase-config.js` (same folder as `dashboard.html`),
 * fill in your Firebase project's configuration values, and then
 * reload the admin dashboard. The dashboard will automatically detect
 * `window.FIREBASE_CONFIG` and enable Firestore sync.
 *
 * WARNING: Do NOT commit `firebase-config.js` with secret values into a
 * public repository. Keep the real config file out of version control.
 *
 * Steps:
 * 1. Create a Firebase project at https://console.firebase.google.com/
 * 2. Add a Web App and copy the config object from the Firebase console.
 * 3. Create `admin/firebase-config.js` and paste the config as shown below.
 * 4. Optionally secure your Firestore rules (recommended) and set proper
 *    read/write rules for the `site/shared` document used by this dashboard.
 *
 * Example (replace the placeholder values):
 */

// Paste your config below and save as `firebase-config.js` (no .example suffix)
// window.FIREBASE_CONFIG = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "your-project.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "...",
//   appId: "..."
// };

/*
 * Optional: simple example of a minimal config file you would create as
 * `admin/firebase-config.js` (UNCOMMENT and replace values):
 *
 * window.FIREBASE_CONFIG = {
 *   apiKey: "AIza...",
 *   authDomain: "my-site.firebaseapp.com",
 *   projectId: "my-site",
 *   storageBucket: "my-site.appspot.com",
 *   messagingSenderId: "1234567890",
 *   appId: "1:1234567890:web:abcdef"
 * };
 */

/*
 * After creating `admin/firebase-config.js` you do NOT need to modify
 * `dashboard.html`. The page will automatically try to load
 * `./firebase-config.js` and enable syncing.
 */
