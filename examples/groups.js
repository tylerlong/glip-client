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
}).then(function (response) {
  console.log('logged in');

  gc.groups().get().then(function (response) { // get groups and teams
    console.log(`${response.records.length} groups/teams were found.`);
  });

  gc.groups().get({ type: 'Group' }).then(function (response) { // get groups
    console.log(`${response.records.length} groups were found.`);
  });

  gc.groups().get({ type: 'Team' }).then(function (response) { // get teams
    console.log(`${response.records.length} teams were found.`);
  });

  gc.groups().get({ groupId: 19203244034 }).then(function (response) { // get group/team by id
    console.log(response);
  });
});
