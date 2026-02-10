import { useQuery } from "@tanstack/react-query";
import { Card } from "@crm/ui";
import { fetchClients } from "../api/clients";

export function ClientsPage() {
  const query = useQuery({ queryKey: ["clients"], queryFn: fetchClients });

  if (query.isLoading) return <p>Loading clients...</p>;
  if (query.isError) return <p>Failed to load clients.</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Clients</h2>
      {query.data?.data.map((client) => (
        <Card key={client.id}>
          <p className="font-medium">{client.name}</p>
          <p className="text-sm text-slate-600">{client.email}</p>
          {client.company ? <p className="text-sm text-slate-500">{client.company}</p> : null}
        </Card>
      ))}
    </div>
  );
}
