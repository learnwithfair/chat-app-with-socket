## CHAT APP WITH SOCKET IO

Thanks for visiting my GitHub account!

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZT5qJiTrdjCqCliDz_UQGGFTvr_hmqFt9DOjGKC80Q&s)

Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. One of the most famous stacks that is used for Web Development is the MERN stack. This stack provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications. [more](https://www.geeksforgeeks.org/mern-stack/)


![](https://miro.medium.com/v2/resize:fit:1200/1*255iTWNk6H1N3_QZIBIAUA.png)
Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It consists of two components: a client, and a server. Both components have a nearly identical API.

## Source Code (Download)

[Click Here](https://mega.nz/folder/kCs3gLwD#OreAYeEeXeabncC4hIbz-g)

## Required Software (Download)

- VS Code, Download ->https://code.visualstudio.com/download
- Node, Download-> https://nodejs.org/en/download

## ========== Environment Setup ==========

1. Install Node.js
2. To verify installation into command form by node -v
3. For initialization npm write the query in the command window as npm init -y
4. Setup the opening file into the package.json and change the file with main:'server.js'
5. To create a server using the express package then write a query into the command window as npm install express.
   Write code in the server file for initialization
   const express = require("express");
   const app = express();
   app.listen(3000, () => {
   console.log("Server is running at http://localhost:3000");
   });

6. Install the nodemon package for automatically running the server as- npm i --save-dev nodemon (For Developing purpose)
7. setup the package.json file in the scripts key, write
   "scripts": {
   "start": "node ./resources/backend/server.js",
   "dev": "nodemon ./resources/backend/server.js",
   "test": "echo \"Error: no test specified\" && exit 1"
   },
8. use the Morgan package for automatic restart. Hence install the morgan package as npm install --save-dev morgan (Development purpose)
   Write code in the server file for initialization
   const morgan = require("morgan");
   app.use(morgan("dev")); --> Middlewire.




## Run the client server

```bash
- cd client
- npm start
```

## Run Server (Command)

In the base directory run->

```bash
- node server.js
```



/_
|--------------------------------------------------------------------------
| Socket IO
|--------------------------------------------------------------------------
_/

```bash
const io = require("socket.io")(8080, {
 cors: {
   origin: BASE_URL
 },
});
io.on("connection", (socket) => {
 console.log("User connected", socket.id);

 setInterval(() => {
   io.emit("refresh", {});
 }, 500)

 // socket.on("disconnect", function () {
 //   console.log("Disconnect");

 // })

});
```


#learnwithfair #rahtulrabbi #rahatul-rabbi #learn-with-fair
