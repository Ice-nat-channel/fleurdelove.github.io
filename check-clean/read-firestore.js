const admin = require('firebase-admin');
try {
  const svc = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(svc) });
} catch (e) {
  console.error('Failed to load serviceAccountKey.json:', e.message || e);
  process.exit(1);
}

const db = admin.firestore();

async function readShared(){
  try{
    const doc = await db.collection('site').doc('shared').get();
    if (!doc.exists) {
      console.log('Document site/shared does not exist');
      process.exit(0);
    }
    console.log(JSON.stringify(doc.data(), null, 2));
    process.exit(0);
  }catch(err){
    console.error('Error reading Firestore:', err);
    process.exit(1);
  }
}

readShared();
