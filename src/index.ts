import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("New request");
  res.json({ value: 10 });
});

app.get("/test", (req, res) => {
  console.log("New test request");
  res.json({ name: 'test' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
