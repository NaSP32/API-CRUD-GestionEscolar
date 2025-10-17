const mongoose = require("mongoose");


const estudianteSchema = new mongoose.Schema(
    {
        nombre : { type: String, required: true},
        apellido : {type: String, required: true},
        email : {type: String, required: true, unique:true},
        cursos : [{type: String, required:true, enum: ["Matemática", "Historia", "Ciencias", "Arte" ],},],

    },

    

    {timestamps: true} //agrega CreateAt y UpdateAt

);

module.exports = mongoose.model("Estudiante", estudianteSchema);