var apiKey = ${{ secrets.FIREBASE_API_KEY }};
var authDomain = ${{ secrets.FIREBASE_AUTH_DOMAIN }};
var projectId = ${{ secrets.FIREBASE_PROJECT_ID }};
var storageBucket = ${{ secrets.FIREBASE_STORAGE_BUCKET }};
var messagingSenderId = ${{ secrets.FIREBASE_MESSAGING_SENDER_ID }};
var appId = ${{ secrets.FIREBASE_APP_ID }};
var measurementId = ${{ secrets.FIREBASE_MEASUREMENT_ID }};

export var firebaseConfig = {
                 apiKey: apiKey,
                 authDomain: authDomain,
                 projectId: projectId,
                 storageBucket: storageBucket,
                 messagingSenderId: messagingSenderId,
                 appId: appId,
                 measurementId: measurementId
               };