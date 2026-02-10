export type Client = {
  id: string;
  name: string;
  email: string;
  company?: string;
  createdAt: string;
  updatedAt: string;
};

export type Deal = {
  id: string;
  clientId: string;
  title: string;
  value: number;
  stage: "lead" | "qualified" | "proposal" | "won" | "lost";
  createdAt: string;
  updatedAt: string;
};

export type Task = {
  id: string;
  clientId?: string;
  dealId?: string;
  title: string;
  dueDate?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateClientInput = {
  name: string;
  email: string;
  company?: string;
};

export type UpdateClientInput = Partial<CreateClientInput>;

export type ListResponse<T> = {
  data: T[];
  total: number;
};

export type AuthSession = {
  userId: string;
  email: string;
  expiresAt: string;
};

export type LoginResponse = {
  success: boolean;
  session: AuthSession | null;
};
