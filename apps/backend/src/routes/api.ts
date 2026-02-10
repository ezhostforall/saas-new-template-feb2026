import { Router, type Request, type Response } from 'express'

const router: Router = Router()

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: '@crm/backend'
  })
})

export default router