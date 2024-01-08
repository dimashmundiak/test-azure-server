import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("New request");
  res.json({ value: 10 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
