import { Router } from "express";
import { ClientService } from "../services/client.service";
import { SupabaseClientRepository } from "../repositories/supabase-client.repository";

const repository = new SupabaseClientRepository();
const service = new ClientService(repository);

export const clientRouter = Router();

clientRouter.get("/", async (_req, res, next) => {
  try {
    const clients = await service.listClients();
    res.json(clients);
  } catch (error) {
    next(error);
  }
});
