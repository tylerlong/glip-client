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

  gc.posts().subscribe((message) => { // receive messages
    if (message.messageType == 'PostAdded') {
      const post = message.post;
      console.log('Post added: ' + post.text);
      if (post.text == 'ping') {
        gc.posts().post({ groupId: post.groupId, text: 'pong' }).then((response) => { // send message
          console.log(response);
        });
      }
    }
  });

  gc.posts().get({ groupId: 19620831234 }).then((response) => { // get messages by group id
    console.log(`${response.records.length} posts were found.`);
  });

  gc.posts().get({ postId: 1227593072644 }).then((response) => { // get message by id
    console.log(response);
  })
});
