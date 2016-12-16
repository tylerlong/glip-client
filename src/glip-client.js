const RingCentral = require('ringcentral');
const Posts = require('./posts');
const Groups = require('./groups');


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

  groups() {
    if (!this._groups) {
      this._groups = new Groups(this.rc);
    }
    return this._groups;
  }
}


module.exports = GlipClient;
