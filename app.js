import express from "express";
import cron from 'node-cron';

import { start as baidu_start } from "./baidu.service.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  // after 5 seconds, start the baidu service
  // setTimeout(baidu_start, 5000);
})

// cron job to run the baidu service every 10 seconds
cron.schedule("*/10 * * * * *", () => {
  console.log('running a task every 10 seconds');
  // baidu_start();
});

