# 🏫 Proyecto: API de Gestión Escolar

## 📋 Descripción
Esta es una API REST desarrollada con **Node.js**, **Express** y **MongoDB Atlas**, desplegada en **Vercel**.  
Permite gestionar estudiantes: crear, listar, actualizar y eliminar datos como nombre, apellido, email y cursos.

El proyecto fue creado como práctica para la formación MERN-Mujeres edicion 2025 de Pilar Tecno y el Polo Tecnológico de La Rioja. 

---

## ⚙️ Tecnologías utilizadas
- Node.js  
- Express  
- MongoDB Atlas (base de datos en la nube)  
- Mongoose  
- Vercel (para el despliegue)

---

## 🧩 Estructura del proyecto
📦 proyecto-gestion-escolar
 ┣ 📂 models
 ┃ ┗ 📜 Estudiante.js
 ┣ 📂 routes
 ┃ ┗ 📜 estudiantes.js
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┗ 📜 README.md

---

## 🧠 Modelo de Estudiante
Cada estudiante tiene los siguientes campos:

| Campo     | Tipo            | Requerido  | Descripción |
|-----------|-----------------|------------|--------------|
| nombre    | String          | ✅ | Nombre del estudiante |
| apellido  | String          | ✅ | Apellido del estudiante |
| email     | String (Único)  | ✅ | Correo electrónico |
| cursos    | Array de Strings| ✅ | Cursos en los que está inscrito ("Matemática", "Historia", "Ciencias", "Arte") |

---

🔹 Despliegue en Vercel: 
https://api-crud-gestion-escolar.vercel.app/ 

## 🚀 Endpoints disponibles


### 1️⃣ Obtener todos los estudiantes  
**GET** `/api/estudiantes`  
Devuelve todos los estudiantes registrados.

### 2️⃣ Filtrar estudiantes por curso  
**GET** `/api/estudiantes?curso=Matemática`  
Devuelve los estudiantes que tengan "Matemática" dentro de su lista de cursos.

### 3️⃣ Crear un nuevo estudiante  
**POST** `/api/estudiantes`  

**Body (JSON):**
```json
{
  "nombre": "Ana",
  "apellido": "López",
  "email": "ana@gmail.com",
  "cursos": ["Matemática", "Arte"]
}
```

### 4️⃣ Actualizar un estudiante
**PUT** `/api/estudiantes/:id`  

**Body (JSON):**
```json
{
    "nombre": "Amadeo ",
    "apellido": "Rodriguez",
    "email": "arodriguez@mail.com",
    "cursos": ["Historia"]
}
```


### 🧪 Cómo probar la API localmente

### 🔹 En local

1. **Clona el repositorio** o descárgalo.  
2. **Instala las dependencias:**
   ```bash
   npm install
3. **Crea un archivo .env con tu conexión de MongoDB Atlas**
4. **Inicia el servidor:**
    ```bash
    npm run dev
5. **Prueba las rutas en Thunder Client o Postman:**
GET http://localhost:3000/estudiantes
GET http://localhost:3000/estudiantes?curso=Historia





