const express = require("express");
const fileRoutes = require("./server/routes/file-upload");
const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://frontend-antivirus-prod.s3-website.us-east-2.amazonaws.com"
// };

app.use(cors())

app.get("/", (req, res) => {
    res.json({ message: "Backend funcionando" });
});

app.use("/api/v1/", fileRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});