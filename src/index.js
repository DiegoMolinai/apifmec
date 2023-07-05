const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

const productoRoutes = require("./routes/producto");
const servcioRoutes = require("./routes/servicio");
const ventaRoutes = require("./routes/ventas");
const notificacionRoutes = require('./routes/notificaciones');
const usuariosRouter = require('./routes/usuarios');
const ordenesRouter = require('./routes/ordenes');
const distribuidoresRouter = require('./routes/distribuidores');
const categoriasRouter = require('./routes/categorias')
const cambiosRoutes = require('./routes/cambios')


const app = express();
const port = process.env.PORT || 9000;

// Middleware

app.use(express.json());
app.use(cors());
app.use('/api', productoRoutes);
app.use('/api', servcioRoutes);
app.use('/api', ventaRoutes)
app.use('/api', notificacionRoutes);
app.use('/api', usuariosRouter);
app.use('/api', ordenesRouter);
app.use('/api', distribuidoresRouter);
app.use('/api', categoriasRouter);
app.use('/api', cambiosRoutes)

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
