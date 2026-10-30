import { Link, NavLink } from 'react-router-dom'

function NavBar({ navData = [] }) {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <div className="text-xl font-bold text-sky-400">
        <Link to="/">My App</Link>
      </div>
      <nav className="flex gap-6 font-medium">
        {navData.map((item) => (
          <NavLink
            key={item.id || item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'text-sky-400 font-semibold'
                : 'text-slate-300 hover:text-white transition'
            }
          >
            {item.title || item.name || item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
