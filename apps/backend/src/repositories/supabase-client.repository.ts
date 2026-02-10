import type { Client, ListResponse } from "@crm/types";
import type { ClientRepository } from "./client.repository";
import { getSupabaseConfig } from "../supabase/supabase.client";

const now = new Date().toISOString();
const MOCK_CLIENTS: Client[] = [
  {
    id: "cl_1",
    name: "Acme Corp",
    email: "contact@acme.com",
    company: "Acme Corp",
    createdAt: now,
    updatedAt: now
  },
  {
    id: "cl_2",
    name: "Globex",
    email: "sales@globex.io",
    company: "Globex",
    createdAt: now,
    updatedAt: now
  }
];

export class SupabaseClientRepository implements ClientRepository {
  async listClients(): Promise<ListResponse<Client>> {
    getSupabaseConfig(); // placeholder for future Supabase SDK wiring.
    return {
      data: MOCK_CLIENTS,
      total: MOCK_CLIENTS.length
    };
  }
}
