require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

// Initialize the app and port
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);

// Create server
const server = http.createServer(app);

// Listening to the server
server.listen(port, () => console.log(`Server listening on port: ${port}`));
