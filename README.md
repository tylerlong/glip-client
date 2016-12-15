# Glip Client

This is a simple Glip client implementation. It currently supports the following features:

- send message
- receive messages
- get message(s)


## Installation

```
yarn add glip-client
```

or

```
npm install --save glip-client
```


## Usage

```javascript
const GlipClient = require('glip-client');
const gc = new GlipClient({
  server: 'https://platform.ringcentral.com',
  appKey: 'appKey',
  appSecret: 'appSecret',
  appName: 'My Glip Client',
  appVersion: '1.0.0',
});
gc.authorize({
  username: 'username',
  extension: '',
  password: 'password',
}).then(function (response) {
  console.log('logged in');
  gc.posts().subscribe(function (message) { // receive message
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
```
