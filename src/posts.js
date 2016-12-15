class Posts {
  constructor(rc) {
    this.rc = rc;
  }

  create(groupId, text) {
    return this.rc.platform().post('/glip/posts', { groupId, text });
  }

  listen(callback) {
    this.subscription = this.rc.createSubscription('https://platform.ringcentral.com/restapi/v1.0/subscription');
    this.subscription.on(this.subscription.events.notification, function (msg) {
      callback(msg.body.post);
    });
    this.subscription.setEventFilters(['/restapi/v1.0/account/~/extension/~/glip/posts']).register();
  }
}


module.exports = Posts;
