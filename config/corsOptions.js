//config/corsOptions.js

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://gestor-estudiantes-front.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type"],
};

module.exports = corsOptions;