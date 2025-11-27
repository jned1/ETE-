const express = require("express");
const app = express();

app.use(express.json());

// Hardcoded user
const user = {
  username: "admin",
  password: "1234"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    return res.json({
      success: true,
      message: "Login successful!"
    });
  }

  return res.json({
    success: false,
    message: "Invalid credentials"
  });
});

app.listen(3000, () => console.log("Login project running on 3000"));
