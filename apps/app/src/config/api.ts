// API configuration for development and production environments
export const getApiBaseUrl = (): string => {
  // Check for explicit environment variable first
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL
  }
  
  // In development, use relative paths with Vite proxy
  if (import.meta.env.DEV) {
    return ''
  }
  
  // In production, use the API subdomain
  return 'https://api.example.com'
}

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    const baseUrl = getApiBaseUrl()
    const response = await fetch(`${baseUrl}/api${endpoint}`)
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`)
    }
    return response.json()
  },
  
  async post<T>(endpoint: string, data: any): Promise<T> {
    const baseUrl = getApiBaseUrl()
    const response = await fetch(`${baseUrl}/api${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`)
    }
    return response.json()
  }
}