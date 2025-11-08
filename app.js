const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // 1. Importar el paquete cors
const connectDB = require("./config/db");
const estudiantesRoutes = require("./routes/estudiantes");
const corsOptions = require("./config/corsOptions"); // 2. Importar las opciones de CORS

dotenv.config(); //cargar variables de entorno
connectDB(); //conectar a la bd


const app = express();
//Configuración de cors
app.use(cors(corsOptions)); // 3. Usar el middleware de CORS con las opciones definidas
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