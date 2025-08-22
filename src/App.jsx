import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ServicesPage from './pages/ServicesPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import EnquiriesPage from './pages/EnquiriesPage.jsx'

const linkBase = 'flex items-center gap-2 px-3 py-2 rounded-xl transition'
const active = 'bg-white/10 ring-1 ring-white/15'
const inactive = 'hover:bg-white/5'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:flex min-h-screen sticky top-0">
          <Sidebar />
        </aside>

        {/* Mobile top bar */}
        <header className="lg:hidden sticky top-0 z-40 bg-slate-950/70 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" className="w-8 h-8 rounded-lg object-contain" alt="Reumaifab logo" />
              <span className="font-semibold">Reumaifab Client</span>
            </div>
            <button onClick={() => setOpen(v=>!v)} className="p-2 rounded-lg bg-white/10 border border-white/20">
              {open ? <X size={18}/> : <Menu size={18}/>}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-3 pb-3"
              >
                <MobileNav onNavigate={() => setOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main */}
        <main className="min-h-[calc(100vh-64px)] lg:min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<ServicesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/enquiries" element={<EnquiriesPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div
      className="w-[280px] p-5 flex flex-col gap-4 border-r border-white/10"
      style={{ backgroundImage: 'linear-gradient(135deg, #0b1220 0%, #0e1626 100%)' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <img src="/logo.jpg" alt="Reumaifab logo" className="w-10 h-10 rounded-xl object-contain shadow-glow" />
        <div>
          <h2 className="text-lg font-semibold leading-tight">Reumaifab</h2>
          <p className="text-slate-400 text-xs">Client Portal</p>
        </div>
      </div>

      <nav className="mt-2 flex flex-col gap-2">
        <NavLink to="/services" className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Services</NavLink>
        <NavLink to="/projects" className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>My Projects</NavLink>
        <NavLink to="/enquiries" className={({isActive}) => `${linkBase} ${isActive?active:inactive}`}>Enquiries</NavLink>
      </nav>

      <div className="mt-auto text-[11px] text-slate-500 pt-3 border-t border-white/10">
        © {new Date().getFullYear()} Reumaifab
      </div>
    </div>
  )
}

function MobileNav({ onNavigate }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-2 mx-2">
      <NavLink to="/services" onClick={onNavigate} className={({isActive}) => `block px-3 py-2 rounded-lg ${isActive?'bg-white/10':'hover:bg-white/5'}`}>Services</NavLink>
      <NavLink to="/projects" onClick={onNavigate} className={({isActive}) => `block px-3 py-2 rounded-lg ${isActive?'bg-white/10':'hover:bg-white/5'}`}>My Projects</NavLink>
      <NavLink to="/enquiries" onClick={onNavigate} className={({isActive}) => `block px-3 py-2 rounded-lg ${isActive?'bg-white/10':'hover:bg-white/5'}`}>Enquiries</NavLink>
    </div>
  )
}