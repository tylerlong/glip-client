class Companies {
  constructor(rc) {
    this.rc = rc;
  }

  get(options) {
    if (options && options.companyId) {
      return this.rc.platform().get(`/glip/companies/${options.companyId}`).then((response) => response.json());
    } else {
      return null;
    }
  }
}


module.exports = Companies;
