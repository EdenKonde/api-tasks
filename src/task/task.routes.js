const express = require('express') 
const rota = express.Router()
const Task = require('./task.models')

const taskMiddlewares = require("./task.middlewares")
const taskControlles = require("./task.controlles")

rota.get("/tasks",taskControlles.listar)
rota.get("/tasks/:id",taskControlles.listaPorId)

rota.post("/tasks",taskControlles.adicionar)
rota.put("/tasks/:id",taskMiddlewares.validateID,taskControlles.atualizar)
rota.delete("/tasks/:id",taskMiddlewares.validateID,taskControlles.apagar)


module.exports = rota; 

  