### ToDoList API

To-Do lists API built by Node.js(Express) and MongoDB

**File Structure :**
```
.
|___config
|  |__config.json
|___driver
|  |__monogodb
|  |__mysql
|___models
|  |__todoModels.js
|___controller
|  |__apiController
|  |__setupController
|___app.js
|___package.json
```
** File Detail **
### Setup
Start MongoDB server
```bash
$ mongod
```
Install all dependencies by use npm
```bash
$ npm install
```
 API will be executed by running the command
```bash
$ node server.js
```
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
POST   /tasks           add a new task to the list (entire Resource)
PUT    /tasks/:taskId   edit existing task (only changed attributes)
PATCH  /tasks/:taskId   edit
DELETE /tasks/:taskId   delete a single task in the list by task id
DELETE /tasks           delete all task in list
```
### How to use 
Note: we use 3000 as default port
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
