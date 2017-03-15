require('dotenv').config()
const GlipClient = require('../src/glip-client')

const gc = new GlipClient({
  server: process.env.APP_SERVER_URL,
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  appName: 'My Glip Client',
  appVersion: '1.0.0'
})
gc.authorize({
  username: process.env.USERNAME,
  extension: '',
  password: process.env.PASSWORD
}).then((response) => {
  console.log('logged in')

  gc.groups().get().then((response) => { // get groups and teams
    console.log(`${response.records.length} groups/teams were found.`)
  })

  gc.groups().get({ type: 'Group' }).then((response) => { // get groups
    console.log(`${response.records.length} groups were found.`)
  })

  gc.groups().get({ type: 'Team' }).then((response) => { // get teams
    console.log(`${response.records.length} teams were found.`)
  })

  gc.groups().get({ groupId: 125976582 }).then((response) => { // get group/team by id
    console.log(response)
  })

  gc.groups().post({
    type : "Team",
    isPublic: true,
    name: "Pawan GlipClient Test2",
    description: "Team to test glip client",
    members: ["pkvenu@gmail.com", "glipbots@gmail.com", ]
  }).then((response) => {
    console.log(response);
    });

  gc.groups().post({
    groupId: 125976582,
    addedPersonEmails: ["john.wang2@ringcentral.com", ],
    addedPersonIds: []
  }).then((response) => {
    console.log(response);
  });

  gc.groups().post({
    groupId: 125976582,
    removedPersonIds : ["glip-638386179"],
  }).then((response) => {
    console.log(response);
  });

  gc.posts().post({ groupId: message.post.groupId, text: 'pong' }).then((response) => { // send message
    console.log(response)
  })

  gc.groups().subscribe((message) => { // monitor group events, such as GroupAdded, GroupChanged and GroupRemoved
    console.log(message)
  })
})
