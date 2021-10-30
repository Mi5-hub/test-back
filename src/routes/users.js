const route = require("express").Router();
// const checkAuthMiddleware = require('../../middleware/check-auth');

const UserController = require('../controller/userController')


/**
 * @swagger
 * /api/users/:id:
 *  get:
 *    description: Use to request one users
 *    response:
 *      200:
 *        description: A successfull response
 *          
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    description: Use to request all users
 *    response:
 *      200:
 *        description: A successfull response
 *          
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    description: Use to add users
 *    response:
 *      200:
 *        description: A successfull response
 *          
 */

/**
 * @swagger
 * /api/users/:id:
 *  put:
 *    description: Use to update users
 *    response:
 *      200:
 *        description: A successfull response
 *          
 */


/**
 * @swagger
 * /api/users/:id:
 *  delete:
 *    description: Use to delete one users
 *    response:
 *      200:
 *        description: A successfull response
 *          
 */

//checkAuthMiddleware.checkAuth

route.get('/', UserController.getAllUsers);
route.get('/:id', UserController.getOneUser);
route.put('/:id', UserController.UpdateUser);
// route.delete('/:id', UserController.DeleteUser);


module.exports = route;