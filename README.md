# Glip Client

This is a simple Glip client implementation. It currently supports the following features:

- send messages
- receive messages


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
const glipClient = new GlipClient({
  server: 'https://platform.ringcentral.com',
  appKey: 'appKey',
  appSecret: 'appSecret',
  appName: 'My Glip Client',
  appVersion: '1.0.0',
});
glipClient.login({
  username: 'username',
  extension: '',
  password: 'password',
}).then(function (response) {
  console.log('logged in');
  glipClient.listen(function (post) { // receive message
    console.log(post.text);
    if (post.text == 'Are you listening?') {
      glipClient.post(post.groupId, 'Yes, I am.'); // send message
    }
  });
});
```
