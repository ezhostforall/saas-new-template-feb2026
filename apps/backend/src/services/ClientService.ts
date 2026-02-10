import { Client, CreateClientInput, UpdateClientInput, ListResponse } from '@crm/types'
import { ClientRepository } from '../repositories/ClientRepository.js'

export class ClientService {
  constructor(private clientRepository: ClientRepository) {}
  
  async getClients(options?: {
    page?: number
    limit?: number
    search?: string
  }): Promise<ListResponse<Client>> {
    return this.clientRepository.findMany(options)
  }
  
  async getClientById(id: string): Promise<Client | null> {
    return this.clientRepository.findById(id)
  }
  
  async createClient(input: CreateClientInput): Promise<Client> {
    return this.clientRepository.create(input)
  }
  
  async updateClient(id: string, input: UpdateClientInput): Promise<Client> {
    return this.clientRepository.update(id, input)
  }
  
  async deleteClient(id: string): Promise<void> {
    return this.clientRepository.delete(id)
  }
}