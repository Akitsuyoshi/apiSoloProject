const { expect } = require('chai');
const Promise = require('bluebird');
const sinon = require('sinon');
const request = require('request');
const d = require('knex');
const knex = require('../db/knex');
require('chai').should();

const base = 'http://localhost:3000/api';

describe('characters', () => {
  let resobj, resBody;
  describe('setup', () => {
    it('has run the initial migrations', () =>
      knex('localchara')
        .select()
        .catch(e => console.log(e)));
  });

  describe('#list', () => {
    it('should return all characters in a correct format', done => {
      request.get(`${base}`, (err, res, body) => {
        res.statusCode.should.eql(200);
        res.headers['content-type'].should.contain('application/json');

        body = JSON.parse(body);
        console.log(body);
        body.status.should.eql('success');

        body.charas.length.should.eql(12);
        // the first object in the data array should
        // have the right keys
        body.charas[0].should.include.keys('id', 'name', 'gender', 'skill', 'url', 'from', 'createdAt');
        // the first object should have the right value for name
        body.charas[0].name.should.eql('Kumamon');
        body.charas[0].from.should.eql('Kumamoto');
        done();
      });
    });

    it('should return specific chara by its id', done => {
      request.get(`${base}/3`, (err, res, body) => {
        res.statusCode.should.eql(200);
        res.headers['content-type'].should.contain('application/json');

        body = JSON.parse(body);
        console.log(body);
        body.status.should.eql('success');
        body.charas[0].should.include.keys('id', 'name', 'gender', 'skill', 'url', 'from', 'registerd_at');

        // the first object should have the right value for name
        body.charas[0].name.should.eql('Kumamon');
        body.charas[0].from.should.eql('Kumamoto');
        done();
      });
    });
  });
});
