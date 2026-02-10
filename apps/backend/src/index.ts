import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import apiRoutes from './routes/api.js'
import authRoutes from './routes/auth.js'
import clientRoutes from './routes/clients.js'

const app: Application = express()
const PORT = parseInt(process.env.PORT || '4000', 10)

// Middleware
app.use(helmet())

// CORS configuration for subdomain-based architecture
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://example.com', 'https://crm.example.com', 'https://api.example.com']
    : ['http://localhost:4321', 'http://localhost:3000'], // Marketing site and CRM app
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', apiRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/clients', clientRoutes)

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Health check available at http://localhost:${PORT}/api/health`)
})

export default app