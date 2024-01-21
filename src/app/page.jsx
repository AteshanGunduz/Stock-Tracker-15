'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from '../App'

const queryClient = new QueryClient()

const Home = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </div>
  )
}
export default Home
