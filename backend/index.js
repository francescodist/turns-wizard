import express from "express";
const app = express();
const port = process.env.PORT ?? 3000;

app.get("/status", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
