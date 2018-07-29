const { expect } = require('chai');
const Promise = require('bluebird');
const sinon = require('sinon');
const request = require('request');
const d = require('knex');
const knex = require('../db/knex');
require('chai').should();

const base = 'http://localhost:3000/api';

// function cleanUp(tableName) {
//   d.schema.dropTable(tableName);
// }

describe('characters', () => {
  let resObj, resBody, errObj, errBody;

  beforeEach(() => {
    resObj = {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
    };
    resBody = {
      status: 'success',
      charas: [
        {
          id: 1,
          name: 'Kumamon',
          gender: '?',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000001',
          from: 'Kumamoto',
          registerd_at: Date.now(),
        },
        {
          id: 2,
          name: 'Barii-san',
          gender: '?',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000002',
          from: 'daiiti_insatsu_company',
          registerd_at: Date.now(),
        },
        {
          id: 3,
          name: 'Nishiko-kun',
          gender: 'M',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000003',
          from: 'nishikokun_project',
          registerd_at: Date.now(),
        },
      ],
      oneChara: {
        id: 3,
        name: 'Nishiko-kun',
        gender: 'M',
        skill: 'kawaii',
        url: 'http://www.yurugp.jp/vote/detail.php?id=00000003',
        from: 'nishikokun_project',
        registerd_at: Date.now(),
      },
    };
    errObj = {
      statusCode: 404,
      headers: {
        'content-type': 'application/json',
      },
    };
    errBody = {
      status: 'failure',
      message: 'The chars does not exist',
    };
    this.get = sinon.stub(request, 'get');
  });
  afterEach(() => request.get.restore());
  describe('setup', () => {
    it('has run the initial migrations', () =>
      knex('localchara')
        .select()
        .catch(e => console.log(e)));
  });

  describe('#list', () => {
    it('should return all characters in a correct format', done => {
      this.get.yields(null, resObj, JSON.stringify(resBody));
      request.get(`${base}`, (err, res, body) => {
        res.statusCode.should.eql(200);
        res.headers['content-type'].should.contain('application/json');

        body = JSON.parse(body);
        console.log(body);
        body.status.should.eql('success');

        // the first object in the data array should
        // have the right keys
        body.charas[0].should.include.keys('id', 'name', 'gender', 'skill', 'url', 'from', 'registerd_at');
        // the first object should have the right value for name
        body.charas[0].name.should.eql('Kumamon');
        body.charas[0].url.should.eql('http://www.yurugp.jp/vote/detail.php?id=00000001');
        body.charas[0].from.should.eql('Kumamoto');

        done();
      });
    });

    it('should return one chara by its id', done => {
      this.get.yields(null, resObj, JSON.stringify(resBody));
      request.get(`${base}/3`, (err, res, body) => {
        res.statusCode.should.eql(200);
        res.headers['content-type'].should.contain('application/json');

        body = JSON.parse(body);
        console.log(body);
        body.status.should.eql('success');

        body.oneChara.should.include.keys('id', 'name', 'gender', 'skill', 'url', 'from', 'registerd_at');
        // the first object should have the right value for name
        body.oneChara.name.should.eql('Nishiko-kun');
        body.oneChara.id.should.eql(3);

        done();
      });
    });
    it("should return failure if chara doesn't exist", done => {
      this.get.yields(null, errObj, JSON.stringify(errBody));
      request.get(`${base}/-1`, (err, res, body) => {
        res.statusCode.should.eql(404);
        res.headers['content-type'].should.contain('application/json');

        body = JSON.parse(body);
        console.log(body);
        body.status.should.eql('failure');

        body.message.should.eql(`The chars does not exist`);
        done();
      });
    });
  });
});
