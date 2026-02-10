import { Outlet, Link } from 'react-router'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex space-x-4">
            <Link
              to="/"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/clients"  
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Clients
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default App