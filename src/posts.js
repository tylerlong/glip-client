class Posts {
  constructor(rc) {
    this.rc = rc;
  }

  post(options) {
    return this.rc.platform().post('/glip/posts', options);
  }

  get(options) {
    if (options.postId) {
      return this.rc.platform().get(`/glip/posts/${options.postId}`);
    } else {
      return this.rc.platform().get('/glip/posts', options);
    }
  }

  subscribe(callback) {
    this.subscription = this.rc.createSubscription();
    this.subscription.on(this.subscription.events.notification, function (notification) {
      console.log(notification);
      callback(notification.body);
    });
    this.subscription.setEventFilters(['/restapi/v1.0/account/~/extension/~/glip/posts']).register();
  }
}


module.exports = Posts;
