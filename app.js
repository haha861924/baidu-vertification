import express from "express";
import cron from 'node-cron';

import { start as baidu_start } from "./baidu.service.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

// cron job to run the baidu service every 120 seconds
cron.schedule("*/120 * * * * *", () => {
  console.log('running a task every 120 seconds');
  baidu_start();
});

