/*
  Use RingCentral JS SDK directly
*/
require('dotenv').config()
const RCSDK = require('ringcentral')

const rcsdk = new RCSDK({
  server: process.env.SERVER,
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  appName: 'My Glip Client',
  appVersion: '1.0.0'
})

const platform = rcsdk.platform()

platform.login({
  username: process.env.USERNAME,
  extension: process.env.EXTENSION,
  password: process.env.PASSWORD
}).then((response) => {
  const subscription = rcsdk.createSubscription()
  subscription.on(subscription.events.notification, (notification) => {
    console.log(notification)
  })
  subscription
    .setEventFilters([
      '/restapi/v1.0/account/~/extension/~/glip/groups',
      '/restapi/v1.0/account/~/extension/~/glip/posts'
    ])
    .register()
}).then((response) => {
  platform.post('/glip/posts', { groupId: '19620831234', text: 'hello world from the bot' }).catch((err) => {
    console.err(err)
  })
}).catch((err) => {
  console.error(err)
})
