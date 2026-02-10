import type { Client, ListResponse } from "@crm/types";

export interface ClientRepository {
  listClients(): Promise<ListResponse<Client>>;
}
