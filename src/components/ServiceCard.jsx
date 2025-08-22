import React, { useState } from 'react'
import { motion } from 'framer-motion'

const glass = 'bg-white/10 backdrop-blur-md border border-white/20 shadow-glow'
const btnBase = 'px-4 py-2 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition'

export default function ServiceCard({ title, onEnquire }) {
  const [showMobile, setShowMobile] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative rounded-2xl ${glass} p-6 cursor-default`}
      onClick={() => setShowMobile(v=>!v)} // tap to reveal on mobile
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-slate-300 text-sm mt-1">Click enquire to get started.</p>

      {/* Hover-to-reveal on large screens */}
      <div className="hidden lg:block">
        <button
          onClick={onEnquire}
          className={`${btnBase} absolute bottom-4 right-4 opacity-0 group-hover:opacity-100`}
        >
          Enquire
        </button>
      </div>

      {/* Tap-to-reveal on small screens */}
      {showMobile && (
        <div className="lg:hidden mt-4 flex justify-end">
          <button onClick={onEnquire} className={btnBase}>Enquire</button>
        </div>
      )}
    </motion.div>
  )
}