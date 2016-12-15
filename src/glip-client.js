const RingCentral = require('ringcentral');


class GlipClient {
  constructor(options) {
    this.ringCentral = new RingCentral(options);
    this.platform = this.ringCentral.platform();
  }

  login(options) {
    return this.platform.login(options);
  }

  post(groupId, text) {
    return this.platform.post('/glip/posts', { groupId, text });
  }

  listen(callback) {
    this.subscription = this.ringCentral.createSubscription('https://platform.ringcentral.com/restapi/v1.0/subscription');
    this.subscription.on(this.subscription.events.notification, function (msg) {
      callback(msg.body.post);
    });
    this.subscription.setEventFilters(['/restapi/v1.0/account/~/extension/~/glip/posts']).register();
  }
}


module.exports = GlipClient;
