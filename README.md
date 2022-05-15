# NgControlPanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Requirements

This project requires [json-server](https://github.com/typicode/json-server) to mock API requests:

```
npm install -g json-server
```

Start JSON Server

```
json-server -w -p 3002 responseMock.json
```

### Possible Issues with json-server

```
Some error occurred Error: listen EADDRINUSE: address already in use 127.0.0.1:3002
```

That means there's a process running using 127.0.0.1:3002. [Solution](https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server)

## Running the Project

With the mock json-server up, install npm packages

```
npm i
```

and run it with Angular

```
ng serve --open
```
