const admin = require('firebase-admin');
const svc = require('./serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(svc) });

const uid = process.argv[2];
if (!uid) { console.error('Usage: node set-admin-claim.js USER_UID'); process.exit(1); }

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => { console.log('Admin claim set for', uid); process.exit(0); })
  .catch(err => { console.error(err); process.exit(1); });