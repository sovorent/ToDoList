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

* **todoListController.js**   functions to do something with mongoDB
* **todoListModels.js**       models for todoList api
* **todoListRoutes.js**       HTTP request/response for specific endpoint   
* **test.js**                 script for test api
* **server.js**               contain protocols for create server
* **package.json**            is a file that gives the necessary information to npm

### Routes
```
**GET**    /tasks           view all items in the list
**GET**    /tasks/:taskId   view a single task in the list
**POST**   /tasks           add a new task to the list 
**PUT**    /tasks/:taskId   edit existing task (entire object)
**PATCH**  /tasks/:taskId   edit existing task (partial object)
**DELETE** /tasks/:taskId   delete a single task in the list by task id
**DELETE** /tasks           delete all task in list
```

### Status Codes

* 200 OK – [GET]
* 201 CREATED – [POST/PUT/PATCH]
* 204 NO CONTENT – [DELETE]
* 404 NOT FOUND – [*]
* 500 INTERNAL SERVER ERROR – [*]


### Setup
Clone this repository by below command
```bash
$ git clone https://github.com/sovorent/ToDoList.git
```
Install all dependencies by using npm
```bash
$ npm install
```
 API will be executed by running the command by using nodemon
```bash
$ npm run start
```
Or if you don't want to use nodemon. then use below command
```bash
$ node server.js
```
> Note: [nodemon](https://nodemon.io/) is a utility that will monitor for any changes in your source and automatically restart your server


### Task Schema 

```json
{
  "name": {
    "type": "String",
    "required": true
  },
  "contents": {
    "type": "String"
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

### How to use 
> Note: using port: 3000 as default port

* **GET**    http://localhost:3000/tasks            
* **GET**    http://localhost:3000/tasks/:taskId      
* **POST**   http://localhost:3000/tasks ``` body { "name": "task", "content": "task details" } ```
* **PUT**    http://localhost:3000/tasks/:taskId
 ```json { "status": "done" } ```
* **DELETE** http://localhost:3000/tasks/:taskId
* **DELETE** http://localhost:3000/tasks

> Note2: better if use [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) as a tool for test this api

### Testing with mocha
(not complete now...)
```bash
$ mocha
```
**Testing Case**
* Access GET URL
* Status 404 with no-found URL
coming soon ....


### Reference
https://codeplanet.io/principles-good-restful-api-design/
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
