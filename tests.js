/*Тесты для GET запроса /posts?userId=<id>&title=<title>*/

const chai = require('chai');
const testCase = require('mocha').describe;
const chaiHttp = require('chai-http');
const should = chai.should();
const baseURL = 'https://jsonplaceholder.typicode.com';
const {testPost, nonexistentPost} = require('./testData');

chai.use(chaiHttp);

testCase('/GET posts?userId=<userId>&title=<title>', function () {
  it('it should GET the post when userId and title is correct', (done) => {
    chai.request(baseURL)
      .get(`/posts?userId=${testPost.userId}&title=${testPost.title}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.have.lengthOf(1);
        res.body[0].should.have.property('userId');
        res.body[0].should.have.property('id');
        res.body[0].should.have.property('title');
        res.body[0].should.have.property('body');
        res.body[0].should.have.property('userId').eql(testPost.userId);
        res.body[0].should.have.property('id').eql(testPost.id);
        res.body[0].should.have.property('title').eql(testPost.title);
        res.body[0].should.have.property('body').eql(testPost.body);
        done();
      })
  });

  it('it should GET the post when userId is empty and title is correct', (done) => {
    chai.request(baseURL)
      .get(`/posts?userId=&title=${testPost.title}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.have.lengthOf(0);
        done();
      });
  });

  it('it should GET the post when userId is wrong and title is correct', (done) => {
    chai.request(baseURL)
      .get(`/posts?userId=${nonexistentPost.userId}&title=${testPost.title}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.have.lengthOf(0);
        done();
      });
  });

  it('it should GET the post when userId is correct and title is empty', (done) => {
    chai.request(baseURL)
      .get(`/posts?userId=${testPost.userId}&title=`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.have.lengthOf(0);
        done();
      });
  });

  it('it should GET the post when userId is correct and title is wrong', (done) => {
    chai.request(baseURL)
      .get(`/posts?userId=${testPost.userId}&title=${nonexistentPost.title}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.have.lengthOf(0);
        done();
      });
  });
});



