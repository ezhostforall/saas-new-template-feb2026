// Domain Models
export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  status: 'active' | 'inactive' | 'prospect';
  createdAt: Date;
  updatedAt: Date;
}

export interface Deal {
  id: string;
  title: string;
  description?: string;
  amount: number;
  currency: string;
  status: 'open' | 'won' | 'lost' | 'pending';
  probability: number;
  clientId: string;
  assignedTo?: string;
  expectedCloseDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'todo' | 'in_progress' | 'done' | 'cancelled';
  assignedTo?: string;
  clientId?: string;
  dealId?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// DTOs
export interface CreateClientInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  status?: 'active' | 'inactive' | 'prospect';
}

export interface UpdateClientInput {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  address?: string;
  status?: 'active' | 'inactive' | 'prospect';
}

// API Wrapper
export interface ListResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Auth Types
export interface AuthSession {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

export interface LoginResponse {
  session: AuthSession;
  user: AuthSession['user'];
}