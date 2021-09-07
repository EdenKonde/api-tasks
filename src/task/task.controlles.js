const { response } = require('express')
const Task = require('./task.models')

module.exports = {
    async listar(req, res){
        try{
            const tasks = await Task.find({})
            return res.status(200).json(tasks)
        } catch(err){
            res.status(500).json({error: err.message})
        }
    },

    async listaPorId(req, res) {
        const { id } = req.params
        try{
            const task = await Task.findById(id)
            return res.status(200).json(task)
        } catch(err){
            res.status(500).json({error: err.message})
        }
    },

    async adicionar(req, res){
        const { description, done } = req.body
        if(!description){
            return res.status(400).json({error:"Falta preencher a description"})
        }
        const task = new Task({
            description,
            done
        })
        try{
            await task.save();
            return res.status(201).json({message:"Adicionado com sucesso!"})
        } catch (err){
            res.status(400).json({ error: err.message })
        }
    },

    async atualizar(req, res){
        const { description, done, updatedAt } = req.body
        
        if(!description){
            return res.status(400).json({error:"Você deve informar a  description"})
        }

        if(description) res.task.description = description
        if(done) res.task.done = done
        res.task.updatedAt = Date()

        try{
            await res.task.save()
            return res.status(200).json({message:"Tarefa atualizada com sucesso!"})
        } catch(error){
            response.status(500).json({ error: err.message})
        }
    },

    async apagar(req, res){
        try{
            await res.task.remove()
            return res.status(200).json({ message: "Tarefa apagada com sucesso!"})
        }catch(err){
            return res.status(500).json( {error: err.message})
        }
    }
}