
var supertest = require("supertest");
var should = require("should");

// status
var GET_ok = 200;
	CREATED_ok = 201;
	No_Content =204;
	Not_Found_Page = 404;

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

var prefix_root_url = '/api/v1.0/'
// UNIT test begin

describe("Access URL",function(){

  it("Test GET /api/v1.0/tasks",function(done){
    server
    .get( prefix_root_url + 'tasks')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      if (err != null) res.body.error.should.equal(false);
      done();
    });
  });

  it("Test Not-found URL",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      if (err != null) res.body.error.should.equal(false);
      done();
    });
  });

/*  it("Test POST /api/v1.0/tasks",function(done){
    server
    .post( prefix_root_url + 'tasks')
    .send({name : "Exercise", content : "Play football"})
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      if(!err)res.body.error.should.equal(false);
      done();
    });
  });*/

});