import React from 'react'
import { motion, AnimatePresence, color } from 'framer-motion'
import { X, Plus, Trash2, MailCheck, Circle } from 'lucide-react'

const glass = 'bg-white/10 backdrop-blur-md border border-white/20 shadow-glow'

export default function EnquiryModal({ service, isOpen, onClose }) {
  const [message, setMessage] = React.useState('')
  const [fields, setFields] = React.useState([{ id: 1, label: 'Feature', value: '' }])
  const [preset, setPreset] = React.useState({ budget: '', timeline: '', priority: 'Medium' })
  const [sending, setSending] = React.useState(false)
  const [delivered, setDelivered] = React.useState(false)

  React.useEffect(()=>{
    if(isOpen && service){
      setMessage(`Enquiry regarding ${service}.`)
      setFields([{ id:1, label:'Feature', value:'' }])
      setPreset({ budget:'', timeline:'', priority:'Medium' })
      setDelivered(false)
      setSending(false)
    }
  },[isOpen, service])

  function updateField(id, patch){
    setFields(prev => prev.map(f => f.id===id ? { ...f, ...patch } : f))
  }

  function addField(){ setFields(prev => [...prev, { id: Date.now(), label:'Detail', value:'' }]) }
  function removeField(id){ setFields(prev => prev.filter(f => f.id!==id)) }

  function handleSend(e){
    e.preventDefault()
    setSending(true)
    setTimeout(()=>{
      setSending(false); setDelivered(true)
    }, 1000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4">
          <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} exit={{y:20, opacity:0}} className={`w-full max-w-2xl rounded-2xl ${glass}`}>
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xl font-semibold">New Enquiry</h3>
              <button className="p-2 rounded-lg bg-white/10 border border-white/20" onClick={onClose}><X size={18}/></button>
            </div>

            <form onSubmit={handleSend} className="p-5 space-y-4">
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea className="w-full rounded-xl bg-white/5 border border-white/10 p-3 min-h-[110px]" value={message} onChange={(e)=>setMessage(e.target.value)} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="rounded-xl bg-white/5 border border-white/10 p-3" placeholder="Budget (optional)" value={preset.budget} onChange={(e)=>setPreset({...preset, budget:e.target.value})}/>
                <input className="rounded-xl bg-white/5 border border-white/10 p-3" placeholder="Timeline" value={preset.timeline} onChange={(e)=>setPreset({...preset, timeline:e.target.value})}/>
                <select className="rounded-xl bg-white/5 border border-white/10 p-3" value={preset.priority} onChange={(e)=>setPreset({...preset, priority:e.target.value})}>
                  <option>Low</option><option>Medium</option><option>High</option>
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Additional Features / Details</h4>
                  <button type="button" onClick={addField} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 flex items-center gap-2"><Plus size={16}/>Add</button>
                </div>
                {fields.map(f => (
                  <div key={f.id} className="grid grid-cols-1 sm:grid-cols-[1fr,2fr,auto] gap-2 items-center">
                    <input className="rounded-xl bg-white/5 border border-white/10 p-3" value={f.label} onChange={(e)=>updateField(f.id, {label:e.target.value})} placeholder="Label"/>
                    <input className="rounded-xl bg-white/5 border border-white/10 p-3" value={f.value} onChange={(e)=>updateField(f.id, {value:e.target.value})} placeholder="Detail"/>
                    <button type="button" onClick={()=>removeField(f.id)} className="p-3 rounded-xl bg-white/10 border border-white/20"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  {sending ? (<><Circle className="animate-pulse" size={16}/><span>Sending…</span></>) : delivered ? (<><MailCheck size={16}/><span>Delivered</span></>) : (<span>Ready</span>)}
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl bg-white/0 border border-white/10">Cancel</button>
                  <button type="submit" disabled={sending} className="px-4 py-2 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">{sending ? 'Sending…' : delivered ? 'Sent' : 'Send Enquiry'}</button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}