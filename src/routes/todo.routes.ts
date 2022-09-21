import express from 'express'
import { deserializeUser } from '../middleware/deserializeUser'
import { requireUser } from '../middleware/requireUser'
import validate from '../middleware/dtoValidation'
import { CreateTodoDto, UpdateTodoDto } from '../dtos/todos.dto'
import {
  createTodoHandler,
  deleteTodoHandler,
  getTodoHandler,
  getTodosHandler,
  updateTodoHandler,
} from '../controllers/todo.controller'

const router = express.Router()

router.use(deserializeUser, requireUser)
router
  .route('/')
  .post(validate(CreateTodoDto), createTodoHandler)
  .get(getTodosHandler)

router
  .route('/:todoId')
  .get(getTodoHandler)
  .patch(validate(UpdateTodoDto, true), updateTodoHandler)
  .delete(deleteTodoHandler)

export default router
