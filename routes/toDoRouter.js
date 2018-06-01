const todoRouter = require('express').Router();
const todoController = require('../controllers/toDoController');
const respController = require('../controllers/responseController');

todoRouter.route('/')
	.get(
		todoController.getAll,
		respController.sendOkResp,
		respController.sendErrResp
	);

	module.exports = todoRouter;