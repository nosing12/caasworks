const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`http://localhost:${port} 에서 서버 실행중`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/services/gantt", (req, res) => {
  res.render("gantt.ejs");
});

app.get("/services/chat-rfi", (req, res) => {
  res.render("chat-rfi.ejs");
});

app.get("/services/daily-report", (req, res) => {
  res.render("daily-report.ejs");
});

app.get("/services/file-storage", (req, res) => {
  res.render("file-storage.ejs");
});

app.get("/services/mobile-app", (req, res) => {
  res.render("mobile-app.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get("/notice", (req, res) => {
  res.render("notice.ejs");
});

app.get("/news", (req, res) => {
  res.render("news.ejs");
});
