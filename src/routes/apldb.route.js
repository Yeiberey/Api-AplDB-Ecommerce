const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const archivoDBPath = path.join(__dirname, "../assets/ventas.db");
    // Verifica si el archivo existe
    if (fs.existsSync(archivoDBPath)) {
      // Envía el archivo como respuesta
      res.download(archivoDBPath, "ventas.db");
    } else {
      // Si el archivo no existe, devuelve un mensaje de error
      res.status(404).send("El archivo no fue encontrado");
    }
  } catch ({ message }) {
    res.status(404).send(message);
  }
});

module.exports = { router };
