/*
  Use RingCentral JS SDK directly
*/
require('dotenv').config();
const RCSDK = require('ringcentral');


const rcsdk = new RCSDK({
  server: 'https://platform.ringcentral.com',
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  appName: 'My Glip Client',
  appVersion: '1.0.0',
});

const platform = rcsdk.platform();

platform.login({
  username: process.env.USERNAME,
  extension: '',
  password: process.env.PASSWORD,
}).then(function (response) {
  const subscription = rcsdk.createSubscription();
  subscription.on(subscription.events.notification, function (msg) {
    console.log(JSON.stringify(msg));
  });
  subscription
    .setEventFilters([
      '/restapi/v1.0/account/~/extension/~/glip/groups',
      '/restapi/v1.0/account/~/extension/~/glip/posts'
    ])
    .register()
    .then(function (resp) {
      // console.log(resp);
    });
}).then(function (response) {
  platform.post('/glip/posts', { groupId: '19620831234', text: 'hello world from the bot' }).catch(function (err) {
    console.log(err);
  });
}).catch(function (e) {
  console.error('Error ' + e.stack);
});
