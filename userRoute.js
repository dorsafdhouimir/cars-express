var express = require('express')
var userController = require('../controller cars/contrUsers')
const router = express.Router();



router.get('/users',userController.getAllUsers)
router.get('/users/:id',userController.getUserById);
router.get('/age',userController.getUsersWithAgeGreaterThan20)
router.get('/',userController.login);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router
