# Todo list (Node js Solution) Mini-doc

## To Run this repo locally

> clone this branch

```bash
git clone -b solomon https://github.com/DevsHoodCommunity/todoListExercise.git
```

> change directory to solomon

```bash
cd solomon
```

> run the following command

```
yarn
```

```
yarn start
```

> after running the yarn start command you should see the following in your terminal / shell

```bash
[nodemon] starting `node index.js`
Mongodb Connected
Server Listening on port 3000
```
<br>
<br>

# Interacting with the endpoints

## To create a todo/task

send a post request to this api endpoint

```bash
    http://localhost:3000/todos/create
```

with a request body like this

```bash
    {
        "name": "Go for a walk",
        "description": "Go For a walk with family at the tafawa balewa square",
        "done": false
    }
```

## To fetch a single todo/task

send a get request to this api endpoint

```bash
    http://localhost:3000/todos/6235c4b6eafb61d762520936
```

response payload

```bash
    {
    "_id": "6235c4b6eafb61d762520936",
    "name": "task 2",
    "description": "lorem ipsum soms sjahsgas lehg awehd asssbe jdiifk",
    "done": true,
    "createdAt": "2022-03-19T11:55:34.557Z",
    "updatedAt": "2022-03-19T11:55:34.557Z",
    "__v": 0
}
```

## To update a todo/task

send a post request to this api endpoint

```bash
    http://localhost:3000/todos/update
```

with a request body like this.
- Note the id property

```bash
    {
        "name": "Go for a walk",
        "description": "Go For a walk with family at the tafawa balewa square",
        "done": true,
        "id":"6235b6911f74e43c9be32cb9"
    }
```

## To delete a todo/task

send a delete request to this api endpoint

```bash
    http://localhost:3000/todos/6235c4b6eafb61d762520936
```

response payload

```bash
    { message:'task deleted successfully' }
```

## To fetch all open task

send a get request to this api endpoint

```bash
    http://localhost:3000/todos/open-task
```

response payload

```
   [
    {
        "_id": "6235b6611f74e43c9be32cb7",
        "name": "Go for a walk",
        "description": "Go For a walk with family at the tafawa balewa square",
        "done": false,
        "createdAt": "2022-03-19T10:54:25.099Z",
        "updatedAt": "2022-03-19T10:54:25.099Z",
        "__v": 0
    }
]
```


## To fetch all close task

send a get request to this api endpoint

```bash
    http://localhost:3000/todos/close-task
```

response payload

```
[
    {
        "_id": "6235b6911f74e43c9be32cb9",
        "name": "Exercise guy",
        "description": "do 150 push ups, 60 squats and go for a 150km run!",
        "done": true,
        "createdAt": "2022-03-19T10:55:13.108Z",
        "updatedAt": "2022-03-19T11:00:15.664Z",
        "__v": 0
    }
]
```

Thanks for reading, that is all Bye :)
