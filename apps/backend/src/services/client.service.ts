import type { Client, ListResponse } from "@crm/types";
import type { ClientRepository } from "../repositories/client.repository";

export class ClientService {
  constructor(private readonly repository: ClientRepository) {}

  listClients(): Promise<ListResponse<Client>> {
    return this.repository.listClients();
  }
}
