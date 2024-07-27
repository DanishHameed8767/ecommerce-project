require('dotenv').config()
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { Router } = require("./routes/routes");
const { listenWebHook } = require("./controller/order");
const app = express();
app.use(cors());
app.post("/webhook", express.raw({ type: "application/json" }), listenWebHook);
app.use(express.json());
app.use(express.static(path.resolve(__dirname,"build")));
app.use(express.static(path.resolve(__dirname,"public")));

app.use("/", Router);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB!!");
}


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
