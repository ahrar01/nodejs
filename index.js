const express = require("express");
const app = express();
const port = 3000;

const DBConnection = require("./db/db_connection")
const userRouter = require("./routes/router");

DBConnection();
app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
