class Posts {
  constructor(rc) {
    this.rc = rc;
  }

  post(options) {
    return this.rc.platform().post('/glip/posts', options);
  }

  subscribe(callback) {
    this.subscription = this.rc.createSubscription();
    this.subscription.on(this.subscription.events.notification, function (msg) {
      callback(msg.body.post);
    });
    this.subscription.setEventFilters(['/restapi/v1.0/account/~/extension/~/glip/posts']).register();
  }
}


module.exports = Posts;