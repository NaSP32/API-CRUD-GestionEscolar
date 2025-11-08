const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const estudiantesRoutes = require("./routes/estudiantes");

dotenv.config(); //cargar variables de entorno
connectDB(); //conectar a la bd


const app = express();
app.use(express.json()); //Middleware para leer json

const express = require('express');
const cors = require('cors');



// ✅ AGREGA ESTO ANTES DE TUS RUTAS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://api-crud-gestion-escolar.vercel.app/' // Si después despliegas el front
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));




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