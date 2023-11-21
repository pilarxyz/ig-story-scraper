require("dotenv").config();

const express = require("express");
const { scrapeId, scrapeStory } = require("./lib/scraper");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "IG Scraper" });
});
// TypeError: Cannot read properties of undefined (reading 'username')
app.post("/user", (req, res) => {
  const username = req.body.username;
  const id = scrapeId(username);
    const story = scrapeStory(id);
    res.render("user", { title: "IG Scraper", username, id, story });
    
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
