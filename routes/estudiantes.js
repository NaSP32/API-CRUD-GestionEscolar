// routes/estudiantes.js
const express = require("express");
const Estudiante = require("../models/Estudiante");
const router = express.Router();


//Obtener todos los estudiantes
router.get('/estudiantes', async (req, res) => {

    try {
        //filtrar por categoria
        const {curso} = req.query;
        //Uso in si se encuentra el paràmetro 'Curso'
        const filtro = curso ? { cursos: { $in: [curso] } }:{};

        const estudiantes = await Estudiante.find(filtro);
        
        res.json(estudiantes);

    } catch (error) {

        res.status(500).json({message : "Error al obtener estudiantes"});
        
    }
});

//POST 
router.post("/estudiantes", async (req, res) => {
    try {
        const nuevoEstudiante = new Estudiante(req.body);
        const nuevoEstudianteGuardado = await nuevoEstudiante.save();
        res.status(201).json(nuevoEstudianteGuardado);
        
    } catch (error) {
        res.status(400).json({message: "Error al crear el estudiante"});
        
    }
});

//PUT
router.put("/estudiantes/:id", async (req,res) => {
    try {
        const estudianteActualizado = await Estudiante.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );
        if (!estudianteActualizado){
            return res.status(404).json({message : "Estudiante no encontrado"});
        }
        res.json(estudianteActualizado);

        
    } catch (error) {
        res.status(400).json({message : "Error al catualizar estudiante"});
        
    }

});

//DELETE
router.delete("/estudiantes/:id", async (req, res) => {
    try {
        const estudianteEliminado = await Estudiante.findByIdAndDelete(req.params.id);
        if (!estudianteEliminado) {
            return res.status(400).json({message : "Estudiante no encontrado"})
        }
        res.json({message : "Estudiante eliminado"});
        
    } catch (error) {
        res.status(400).json({message : "Error al eliminar el estudiante"});
        
    }
});

module.exports = router;