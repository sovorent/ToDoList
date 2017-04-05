### ToDoList API

Node.js + Express + mongodb 

### Setup
```bash
$ npm install
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
GET    /tasks
GET    /tasks/:taskId
POST   /tasks
PUT    /tasks/:taskId
DELETE /tasks/:taskId
DELETE /tasks
```
