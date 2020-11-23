// Imports necesarios
const express = require("express");
const fileRoutes = require("./server/routes/file-upload");
const cors = require("cors");

// Creación de instancia de express
const app = express();

// Configuración del filtro CORS
// El puerto está como 3000 dado que es el que se usa en el front en este momento
var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json({ message: "Backend funcionando" });
});

// Ruta raíz del proyecto
app.use("/api/v1/", fileRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});