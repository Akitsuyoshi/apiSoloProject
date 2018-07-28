const { expect } = require('chai');
const Promise = require('bluebird');
const sinon = require('sinon');
const knex = require('../db/knex');

function cleanUp(tableName) {
  knex.schema.del(tableName);
}

describe('characters', () => {
  describe('setup', () => {
    it('has run the initial migrations', () =>
      knex('localchara')
        .select()
        .catch(e => console.log(e)));
  });

  // describe("#list", () => {
  //   beforeEach(() => cleanUp(localchara));
  //   afterEach
  //   it("should")
  // })
});
