class Persons {
  constructor(rc) {
    this.rc = rc;
  }

  get(options) {
    if (options && options.personId) {
      return this.rc.platform().get(`/glip/persons/${options.personId}`).then((response) => response.json());
    } else {
      return null;
    }
  }
}


module.exports = Persons;
