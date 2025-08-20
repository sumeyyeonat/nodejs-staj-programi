const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Route to display user list
app.get("/users", (req, res) => {
  const users = [
    { name: "Sumeyye", email: "sumeyye@example.com" },
    { name: "Beyza", email: "beyza@example.com" },
    { name: "Burak", email: "burak@example.com" },
  ];
  res.render("users", { users });
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Task-11 Application");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
