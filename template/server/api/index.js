import { Router } from 'express'

import users from './users'

const router = Router()

// Add USERS Routes
router.use(users)

export default router
