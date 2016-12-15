const RingCentral = require('ringcentral');
const Posts = require('./posts');


class GlipClient {
  constructor(options) {
    this.rc = new RingCentral(options);
  }

  authorize(options) {
    return this.rc.platform().login(options);
  }

  posts() {
    if (!this._posts) {
      this._posts = new Posts(this.rc);
    }
    return this._posts;
  }
}


module.exports = GlipClient;
