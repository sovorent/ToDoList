### ToDoList API

To-Do lists API built by Node.js(Express) and MongoDB

**File Structure :**
```
.
|___api
|  |__controllers
|  |  |__todoListController.js
|  |__models
|  |  |__todoListModels.js
|  |__routes
|     |__todoListRoutes.js
|___test
|  |__test.js
|___server.js
|___package.json
|___README.md

```
### Files detail
* todoListController.js
* todoListModels.js
* todoListController.js
### Status Codes
200 OK – [GET]
The Consumer requested data from the Server, and the Server found it for them (Idempotent)
201 CREATED – [POST/PUT/PATCH]
The Consumer gave the Server data, and the Server created a resource
204 NO CONTENT – [DELETE]
The Consumer asked the Server to delete a Resource, and the Server deleted it
400 INVALID REQUEST – [POST/PUT/PATCH]
The Consumer gave bad data to the Server, and the Server did nothing with it (Idempotent)
404 NOT FOUND – [*]
The Consumer referenced an inexistant Resource or Collection, and the Server did nothing (Idempotent)
500 INTERNAL SERVER ERROR – [*]
The Server encountered an error, and the Consumer has no knowledge if the request was successful
### Setup
Start MongoDB server
```bash
$ mongod
```
Install all dependencies by use npm
```bash
$ npm install
```
 API will be executed by running the command by using nodemon
```bash
$ npm run start
```
> Note: [nodemon](https://nodemon.io/) is a utility that will monitor for any changes in your source and automatically restart your server

### Models
```json
{
  "name": {
    "type": "String",
    "Required": "Kindly enter the name of the task"
  },
  "contents": {
    "type": "String"
  },
  "Created_date": {
    "type": "Date",
    "default": "Date.now"
  },
  "status": {
    "type": [{
        "type": "String",
        "enum": ["pending", "done"]
    }],
    "default": ["pending"]
  }
}
```
### Routes
```
GET    /tasks           view all items in the list
GET    /tasks/:taskId   view a single task in the list
POST   /tasks           add a new task to the list 
PUT    /tasks/:taskId   edit existing task (entire object)
PATCH  /tasks/:taskId   edit existing task (partial object)
DELETE /tasks/:taskId   delete a single task in the list by task id
DELETE /tasks           delete all task in list
```
### How to use 
> Note: we use 3000 as default port
> Note2: better if use [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) as a tool for test this api
* GET    http://localhost:3000/tasks
* GET    http://localhost:3000/tasks/:taskId
* POST   http://localhost:3000/tasks           { "name": "task", "content": "task details" }
* PUT    http://localhost:3000/tasks/:taskId
* DELETE http://localhost:3000/tasks/:taskId
* DELETE http://localhost:3000/tasks
### Testing with mocha
```bash
$ mocha
```
list testing topic


### Reference
https://codeplanet.io/principles-good-restful-api-design/
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
