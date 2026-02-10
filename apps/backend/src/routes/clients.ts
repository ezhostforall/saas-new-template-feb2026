import { Router, type Request, type Response } from 'express'
import { ClientService } from '../services/ClientService.js'
import { SupabaseClientProvider } from '../providers/SupabaseClientProvider.js'

const router: Router = Router()

// Initialize service with provider
const clientProvider = new SupabaseClientProvider()
const clientService = new ClientService(clientProvider)

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const search = req.query.search as string
    
    const result = await clientService.getClients({ page, limit, search })
    
    res.json(result)
  } catch (error) {
    console.error('Error fetching clients:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const client = await clientService.getClientById(req.params.id)
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' })
    }
    
    res.json(client)
  } catch (error) {
    console.error('Error fetching client:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const client = await clientService.createClient(req.body)
    res.status(201).json(client)
  } catch (error) {
    console.error('Error creating client:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const client = await clientService.updateClient(req.params.id, req.body)
    res.json(client)
  } catch (error) {
    console.error('Error updating client:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await clientService.deleteClient(req.params.id)
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting client:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router