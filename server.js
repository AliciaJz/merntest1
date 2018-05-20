const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB CONFIG
const db = require("./config/keys").mongoURI;

// Connectar a MongoDb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Zila!"));

// Rutas a usar
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server corriendo en puerto ${port}`));
