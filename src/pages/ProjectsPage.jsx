import React from 'react'

const PROJECTS = [
  { id: 'PRJ-001', name: 'Website Development', status: 'in-progress' },
  { id: 'PRJ-002', name: 'Bulk SMS Platform', status: 'completed' },
]

export default function ProjectsPage(){
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">My Projects</h2>
      </div>

      <div className="space-y-3">
        {PROJECTS.map(p => (
          <div key={p.id} className="rounded-2xl bg-white/10 border border-white/20 p-4 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs">{p.id}</p>
              <h4 className="font-medium">{p.name}</h4>
            </div>
            <span className={p.status==='completed' ? 'px-3 py-1.5 rounded-full text-emerald-300 bg-emerald-500/15 border border-emerald-400/30' : 'px-3 py-1.5 rounded-full text-blue-300 bg-blue-500/15 border border-blue-400/30'}>
              {p.status==='completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}