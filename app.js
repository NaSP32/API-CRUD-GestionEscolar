const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const estudiantesRoutes = require("./routes/estudiantes");

dotenv.config(); //cargar variables de entorno
connectDB(); //conectar a la bd



// 📍 EN TU ARCHIVO app.js o index.js DEL BACKEND

const cors = require('cors');
const express = require('express');
const app = express();

// 1. Define la "lista de invitados" (quién puede hacerte peticiones)
// ❗️ Esta es la URL de tu frontend
const corsOptions = {
  origin: 'https://gestor-estudiantes-front.vercel.app', 
  optionsSuccessStatus: 200
};

// 2. Aplicá el middleware
// Esto le dice a Express que use estas reglas de CORS
app.use(cors(corsOptions));

// 3. El resto de tu app...
app.use(express.json());

// ...TUS RUTAS (app.use('/api/estudiantes', ...))

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