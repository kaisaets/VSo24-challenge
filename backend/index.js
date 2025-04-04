const fs = require("fs/promises");
const bodyParser = require("body-parser")
const path = require("path");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  try {
    // meals.json asukoht
    const mealsFilePath = path.join(__dirname, "data", "meals.json");
    // see rida loeb meals.json faili sisu
    const mealsData = await fs.readFile(mealsFilePath, "utf8");
    //parsib andmed JSON formaadis ja tagastab need
    res.json(JSON.parse(mealsData));
  } catch (error) {
    // veateade kui faili lugemisel on error
    console.error("Error reading meals.json:", error);
    res.status(500).json({ message: "Error reading meal data", error: error.message });
  }
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3002);
console.log('Server running on port 3002')