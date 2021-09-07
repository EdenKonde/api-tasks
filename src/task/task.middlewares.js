const Task = require('./task.models')
// const { validate } = require("./task.models");
const mongoose = require('mongoose')

module.exports = {
    async validateID(req,res, next){
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ error: "ID inválido."});
        }
        try{
            const task = await Task.findById(id)
            // console.log(task)
            res.task = task
            if(!task){
                return res.status(404).json({error:"Tarefa não localizada"})
            }
        } catch (err){
            return res.status(500).json({error:err.message})
        }

        next()
    }
}