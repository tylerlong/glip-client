class Groups {
  constructor (rc) {
    this.rc = rc
  }

  get (options) {
    if (options && options.groupId) {
      return this.rc.platform().get(`/glip/groups/${options.groupId}`).then((response) => response.json())
    } else {
      return this.rc.platform().get('/glip/groups', options).then((response) => response.json())
    }
  }

  post(options){
    if(options && options.groupId){
      return this.rc.platform().post(`/glip/groups/${options.groupId}/bulk-assign`, options).then((response) => response.json())
    }else {
      return this.rc.platform().post('/glip/groups', options).then((response) => response.json())
    }
  }

  subscribe (callback) {
    this.subscription = this.rc.createSubscription()
    this.subscription.on(this.subscription.events.notification, (notification) => {
      callback(notification.body)
    })
    this.subscription.setEventFilters(['/restapi/v1.0/account/~/extension/~/glip/groups']).register()
  }
}

module.exports = Groups
