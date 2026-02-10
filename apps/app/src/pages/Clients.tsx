import { useQuery } from '@tanstack/react-query'
import { Card, CardHeader, CardTitle, CardContent, Button } from '@crm/ui'
import type { Client, ListResponse } from '@crm/types'
import { apiClient } from '../config/api'

async function fetchClients(): Promise<ListResponse<Client>> {
  return apiClient.get<ListResponse<Client>>('/clients')
}

export default function Clients() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['clients'],
    queryFn: fetchClients,
  })

  if (isLoading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-8">Clients</h1>
        <div className="flex justify-center">
          <p className="text-muted-foreground">Loading clients...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-8">Clients</h1>
        <div className="flex justify-center">
          <p className="text-destructive">Error loading clients: {error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Clients</h1>
        <Button>Add Client</Button>
      </div>

      {data && data.data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.data.map((client) => (
            <Card key={client.id}>
              <CardHeader>
                <CardTitle>{client.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-foreground">{client.email}</p>
                  {client.phone && (
                    <p className="text-muted-foreground">{client.phone}</p>
                  )}
                  {client.company && (
                    <p className="text-muted-foreground">{client.company}</p>
                  )}
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      client.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : client.status === 'prospect'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {client.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="text-muted-foreground">No clients found</p>
        </div>
      )}
      
      {data && (
        <div className="mt-8 text-center text-muted-foreground">
          Showing {data.data.length} of {data.total} clients
        </div>
      )}
    </div>
  )
}