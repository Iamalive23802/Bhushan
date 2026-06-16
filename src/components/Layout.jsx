import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-background font-sans text-on-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
