import express from "express";
import { start as baidu_start } from "./baidu.service.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
  setTimeout(baidu_start, 5000);
})
