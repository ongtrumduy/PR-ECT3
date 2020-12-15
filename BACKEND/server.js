import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import socketio from "socket.io";
import events from "events";

import receiveJobFieldRoutes from "../BackEnd/src/routes/receiveJobField";
import receiveJobChildRoutes from "../BackEnd/src/routes/receiveJobChild";

// import allSockets from "../BackEnd/src/io-sockets/allsockets";

import portRoutes from "../BackEnd/src/routes/port";

let app = express();
let server = http.Server(app);
let port = 8081;
let io = socketio(server);

app.use(cors());

let corsOptions = {
  body: "*",
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(bodyParser.json());

events.EventEmitter.defaultMaxListeners = 6969696969696969696969696969696969696969696969696969;

//========================Routes=========================================

receiveJobFieldRoutes(app, corsOptions);

receiveJobChildRoutes(app, corsOptions);

//=========================================================================

//============================Socket======================================

// allSockets(io);

//=========================================================================

//============================Port======================================

portRoutes(server, port);

//=========================================================================
