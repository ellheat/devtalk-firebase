const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendNotifications = functions.database.ref('/rooms/{roomId}').onWrite((event) => {
  return admin.messaging().subscribeToTopic([
    'e_MWAIdOdEI:APA91bFln3Nwydt0-NT7Dtq4RxnSXZomBi18AE1CYXUGu1apxCXarW-ty_gZ9PiI3WGd-Xxy-Pe_7L0jw9eUb-W6bxNua2IMIbfe97ZbsCae_4Dq23mjY9BrHNVnMd2h-QSNCKntKevA'
  ], 'siema').then(() => {
    return admin.messaging().sendToTopic('siema', {
      notification: {
        title: 'Hello!',
        body: 'Hello, world!'
      }
    });
  });
});
