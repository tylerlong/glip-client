require('dotenv').config()
const GlipClient = require('../src/glip-client')

const gc = new GlipClient({
  server: process.env.SERVER,
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
