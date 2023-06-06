const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

const productoRoutes = require("./routes/producto");

const app = express();
const port = process.env.PORT || 9000;

// Middleware

app.use(express.json());
app.use(cors());
app.use('/api', productoRoutes);

//RUTAS

app.get("/", (req, res) => {
  res.send("TESTEO API");
});

// MONGODB CONEXION

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexion Correcta"))
  .catch((error) => console.log(error));

app.listen(9000, () => console.log("server listening on port", port));
