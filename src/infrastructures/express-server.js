/**
 * Express server class responsible for serving the API using
 * the express framework.
 */
const express = require("express");

const app = express();

class ExpressServer {
  constructor() {
    this.app = express();
  }

  start() {
    this.app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  }
}

module.exports = ExpressServer;
