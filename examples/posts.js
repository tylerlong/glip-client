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
  gc.posts().subscribe(function (message) { // receive messages
    if (message.messageType == 'PostAdded') {
      const post = message.post;
      console.log('Post added: ' + post.text);
      if (post.text == 'ping') {
        gc.posts().post({ groupId: post.groupId, text: 'pong' }); // send message
      }
    }
  });

  gc.posts().get({ groupId: 19620831234 }).then(function (response) { // get messages by group id
    const posts = response.json().records;
    console.log(`${posts.length} posts were found.`);
  });

  gc.posts().get({ postId: 1227593072644 }).then(function (response) { // get message by id
    const post = response.json();
    console.log(post);
  })
});
