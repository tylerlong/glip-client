require('dotenv').config();
const GlipClient = require('../index');


const gc = new GlipClient({
  server: 'https://platform.ringcentral.com',
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  appName: 'My Glip Client',
  appVersion: '1.0.0',
});
gc.authorize({
  username: process.env.USERNAME,
  extension: '',
  password: process.env.PASSWORD,
}).then((response) => {
  console.log('logged in');

  gc.persons().get({ personId: '850957020' }).then((response) => { // get person by id
    console.log(response);
  });
});
