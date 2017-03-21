# Glip Client

This is a simple Glip client implementation. It currently supports the following features:

- [posts](examples/posts.js)
    - send message
    - receive messages in real time
    - monitor message modification and removal in real time
    - get message(s)
- [groups](examples/groups.js)
    - get group(s)/team(s)
    - monitor group events
- [persons](examples/persons.js)
    - get person
- [companies](examples/companies.js)
    - get company


## Requirement

Node.js 4.2 as mimimum.


## Installation

```
yarn add glip-client
```

or

```
npm install --save glip-client
```


## Usage

Please check the [examples](examples).

Here is a code snippet to help you to get started quickly:

```javascript
require('dotenv').config()
const GlipClient = require('glip-client')

const gc = new GlipClient({
  server: process.env.SERVER, // https://platform.ringcentral.com for production or https://platform.devtest.ringcentral.com for sandbox
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  appName: 'My Glip Client',
  appVersion: '1.0.0'
})
gc.authorize({
  username: process.env.USERNAME,
  extension: process.env.EXTENSION,
  password: process.env.PASSWORD
}).then((response) => {
  console.log('logged in')

  gc.posts().subscribe((message) => {
    if (message.messageType === 'PostAdded') { // receive new messages
      console.log(message)
      if (message.post.text === 'ping') {
        gc.posts().post({ groupId: message.post.groupId, text: 'pong' }).then((response) => { // send message
          console.log(response)
        })
      }
    } else { // other message events, such as PostChanged and PostRemoved
      console.log(message)
    }
  })

  gc.posts().get({ groupId: process.env.GROUP }).then((response) => { // get messages by group id
    console.log(`${response.records.length} posts were found.`)
  })

  gc.posts().get({ postId: process.env.POST }).then((response) => { // get message by id
    console.log(response)
  })
})
```


## Login Glip to test

For sandbox, please login https://glip.devtest.ringcentral.com/

For production, please login https://app.glip.com/


## Todo

- support batch operations
    - postpone, maybe multipart/mixed will be replaced with JSON array.
- Write real unit testing
- Setup Travis CI and Coveralls
