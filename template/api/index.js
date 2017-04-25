import { Router } from 'express'

import users from './users'

var router = Router()

// Add USERS Routes
router.use(users)

export default router
