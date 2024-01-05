const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("test request");
  res.status(200).json({ value: 1 });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
