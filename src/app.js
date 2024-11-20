require('dotenv').config()
const config = require('./config/config')
const express = require('express')
const routes = require('./frameworks/webserver/routes/routes')
const server = require('./frameworks/webserver/server')
const postgresConnection = require('./frameworks/database/postgres/connection')
const expressConfig = require('./frameworks/webserver/express')
const rabbitmqConnection = require('./frameworks/webserver/rabbitmq')
const RabbitMqRepository = require('./frameworks/rabbitmq/repositories/rabbitmq-repository')
const projectController = require('./controllers/project-controller')
const userController = require('./controllers/user-controller')
const taskController = require('./controllers/task-controller')
const redisRepository = require('./frameworks/database/redis/repositories/redis-repository')
const projectRepository = require('./frameworks/database/postgres/repositories/project-repository')
const userRepository = require('./frameworks/database/postgres/repositories/user-repository')
const taskRepository = require('./frameworks/database/postgres/repositories/task-repository')
const project = require('./frameworks/database/postgres/models/project')
const task = require('./frameworks/database/postgres/models/task')
const user = require('./frameworks/database/postgres/models/user')

const redis = require('./frameworks/webserver/redis')

;(async () => {
  let redis = require('./frameworks/webserver/redis')

  // DEFINE EXPRESS
  const app = express()

  expressConfig(app)

  //REDIS
  let redisConnection = await redis.startServer()

  //RABBIT
  const mqConnection = rabbitmqConnection(config)

  // RUN SEQUELIZE
  const sequelize = postgresConnection(config)

  // HELPERS
  /*===================================================IMPORT========================================================== */
  //MODEL

  //REPOSITORY

  //USE CASE

  //EVENT
  // todo: buat rabbit event
  const events = require('./adapters/event/index')

  //CONTROLLER

  /*===================================================DEFINE========================================================== */
  //MODELS
  const models = {
    project: project(sequelize),
    user: user(sequelize),
    task: task(sequelize)
  }

  //REPOSITORIES
  const repositories = {
    rabbitMqRepo: await RabbitMqRepository(mqConnection),
    redisRepository: redisRepository(redisConnection),
    projectRepository: projectRepository(models),
    userRepository: userRepository(models),
    taskRepository: taskRepository(models)
  }

  //USE CASES
  const useCases = {}

  //EVENTS
  await events(repositories, useCases)

  //CONTROLLERS
  const controllers = {
    projectController: projectController(repositories),
    taskController: taskController(repositories),
    userController: userController(repositories)
  }

  // DEFINE ROUTES
  routes(app, controllers)

  // RUN SERVER
  server(app)
})()
