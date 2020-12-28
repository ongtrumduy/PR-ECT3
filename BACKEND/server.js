import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import socketio from "socket.io";
import events from "events";
import moment from "moment";

import allRoutes from "./src/routes/allroutes";

import allSockets from "./src/io-sockets/allsockets";

import portRoutes from "./src/routes/port";

let app = express();
let server = http.Server(app);
let port = 8081;
let io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

app.use(cors());

let corsOptions = {
  body: "*",
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET,PUT,POST,DELETE"
};

app.use(bodyParser.json());

events.EventEmitter.defaultMaxListeners = 6969696969696969696969696969696969696969696969696969;

//========================Routes=========================================

allRoutes(app, corsOptions);

//=========================================================================

//============================Socket======================================

allSockets(io);

//=========================================================================

//============================Port======================================
portRoutes(server, port);
//=========================================================================
