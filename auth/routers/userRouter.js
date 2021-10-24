const { Router } = require('express')
const router = Router()
const userController = require('../controllers/userController')
const tokenTTLcheck = require('../middleware/tokenTTLcheck')


router.get('/me', tokenTTLcheck, userController.me)

router.get('/refresh', userController.refresh_token)

module.exports = router