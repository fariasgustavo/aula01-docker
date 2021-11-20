const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Hello World Docker!",
    version: "1.0.0",
  });
});

app.listen(port);
console.log("Aplicação executando na porta ", port);
