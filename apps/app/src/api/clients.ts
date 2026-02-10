import type { Client, ListResponse } from "@crm/types";

export async function fetchClients(): Promise<ListResponse<Client>> {
  const response = await fetch("/api/clients");
  if (!response.ok) {
    throw new Error("Failed to load clients");
  }

  return response.json() as Promise<ListResponse<Client>>;
}
