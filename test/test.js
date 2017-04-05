
var supertest = require("supertest");
var should = require("should");

// status
var GET_ok = 200;
	CREATED_ok = 201;
	No_Content =204;
	Not_Found_Page = 404;

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("Access URL",function(){

  // #1 should return home page

  it("Should access GET /tasks",function(done){

    // calling home page api
    server
    .get("/tasks")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      if (err != null) res.body.error.should.equal(false);
      done();
    });
  });

  it("Shouldn't access GET /",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(404) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(404);
      // Error key should be false.
      if (err != null) res.body.error.should.equal(false);
      done();
    });
  });

  it("should add data POST /tasks",function(done){

    //calling ADD api
    server
    .post('/tasks')
    .send({name : "Exercise", contents : "Play football"})
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      if(!err)res.body.error.should.equal(false);
      //res.body.data.should.equal(40);
      done();
    });
  });

});