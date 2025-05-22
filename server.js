const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("ws");
const { color, log } = require("console-log-colors");

const connectDB = require("./config/connectdb");

const app = express();
const port = process.env.PORT || 8000;
const itemRoutes = require('./routes/itemRoutes');
const openaiRoutes = require('./routes/openaiRoutes');

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
// Connect MongoDB
connectDB();

app.use('/api', itemRoutes);
app.use('/api/openai', openaiRoutes);

const server = http.createServer(app);


server.listen(port, () => {
  log(color.cyan(" ******************************************** "));
  log(color.cyan(" *******                              ******* "));
  log(
    color.cyan(` *******   Server started at ${process.env.PORT}     ******* `)
  );
  log(color.cyan(" *******                              ******* "));
  log(color.cyan(" ******************************************** "));
});
