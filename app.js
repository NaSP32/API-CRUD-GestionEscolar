const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const estudiantesRoutes = require("./routes/estudiantes");

dotenv.config(); //cargar variables de entorno
connectDB(); //conectar a la bd


const app = express();
app.use(express.json()); //Middleware para leer json

//Ruta base
app.get("/", (req, res) => {
    res.send('API de Gestión Escolar')
});

app.use("/api", estudiantesRoutes);

//Iniciamos el servidor
const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`Servidor cooriendo en http://localhost:${PORT}`);
});