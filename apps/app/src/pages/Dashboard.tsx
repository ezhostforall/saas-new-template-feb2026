import { Card, CardHeader, CardTitle, CardContent } from '@crm/ui'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
            <p className="text-muted-foreground">Active clients</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">18</p>
            <p className="text-muted-foreground">Open deals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$125,340</p>
            <p className="text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}