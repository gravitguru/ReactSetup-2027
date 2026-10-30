import { Outlet } from 'react-router-dom'
import NavBar from './Component/NavBar/NavBar'
import Footer from './Component/Footer/Footer'
import { navData } from './data/NavData'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <NavBar navData={navData} />

      <main className="flex-1 p-6 text-xl font-semibold">
        {children || <Outlet />}
      </main>

      <Footer />
    </div>
  )
}

export default Layout

