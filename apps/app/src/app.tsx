import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Button } from "@crm/ui";
import { DashboardPage } from "./pages/dashboard";
import { ClientsPage } from "./pages/clients";

export function App() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">CRM</h1>
        <nav className="flex gap-2">
          <Link to="/">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <Link to="/clients">
            <Button>Clients</Button>
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
