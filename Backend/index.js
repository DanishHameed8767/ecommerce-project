const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Router } = require("./routes/routes");
const { listenWebHook } = require("./controller/order");
const app = express();
app.use(cors());
app.post('/webhook', express.raw({ type: 'application/json' }), listenWebHook);

app.use(express.json());
app.use(express.static("Backend/public"));
const port = 5000;
app.use("/", Router);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-app");
  console.log("Connected to MongoDB!!");
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
