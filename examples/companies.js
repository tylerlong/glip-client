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

  gc.companies().get({ companyId: process.env.COMPANY }).then((response) => { // get company by id
    console.log(response)
  })
})
