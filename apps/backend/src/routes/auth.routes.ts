import { Router } from "express";
import type { LoginResponse } from "@crm/types";

export const authRouter = Router();

authRouter.post("/login", (_req, res) => {
  const response: LoginResponse = {
    success: true,
    session: {
      userId: "user_demo",
      email: "demo@crm.local",
      expiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString()
    }
  };

  res.json(response);
});

authRouter.post("/logout", (_req, res) => {
  res.status(204).send();
});

authRouter.get("/session", (_req, res) => {
  res.json({
    userId: "user_demo",
    email: "demo@crm.local",
    expiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString()
  });
});
