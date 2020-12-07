// Imports necesarios
const express = require("express");
const fileRoutes = require("./server/routes/file-upload");
const cors = require("cors");

// Creación de instancia de express
const app = express();

//var corsOptions = {
//  origin: "*" // modified from 8081
//};

// app.options('*', cors())

let corsOptions = {
  origin: 'http://frontend-antivirus-prod.s3-website.us-east-2.amazonaws.com/',
  optionsSuccessStatus: 200
}

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