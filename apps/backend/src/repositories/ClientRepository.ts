import { Client, CreateClientInput, UpdateClientInput, ListResponse } from '@crm/types'

export interface ClientRepository {
  findMany(options?: {
    page?: number
    limit?: number
    search?: string
  }): Promise<ListResponse<Client>>
  
  findById(id: string): Promise<Client | null>
  
  create(input: CreateClientInput): Promise<Client>
  
  update(id: string, input: UpdateClientInput): Promise<Client>
  
  delete(id: string): Promise<void>
}