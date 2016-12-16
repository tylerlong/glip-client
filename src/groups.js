class Groups {
  constructor(rc) {
    this.rc = rc;
  }

  get(options) {
    if (options && options.groupId) {
      return this.rc.platform().get(`/glip/groups/${options.groupId}`).then((response) => response.json());
    } else {
      return this.rc.platform().get('/glip/groups', options).then((response) => response.json());
    }
  }
}


module.exports = Groups;
