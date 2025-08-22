import React from 'react'
import { MailCheck, Circle } from 'lucide-react'

export default function EnquiriesPage(){
  const rows = [
    { subject: 'Enquiry regarding SEO Experts.', service: 'SEO Experts', date: '2025-08-20', delivered: true },
    { subject: 'Enquiry regarding Digital Marketing.', service: 'Digital Marketing', date: '2025-08-18', delivered: false },
  ]

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Enquiries</h2>
      </div>

      <div className="rounded-2xl bg-white/10 border border-white/20 overflow-hidden">
        <div className="grid grid-cols-12 text-sm text-slate-300 border-b border-white/10">
          <div className="col-span-5 p-3">Subject</div>
          <div className="col-span-3 p-3">Service</div>
          <div className="col-span-2 p-3">Date</div>
          <div className="col-span-2 p-3 text-right">Delivery</div>
        </div>
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-12 text-sm border-b border-white/5 last:border-0">
            <div className="col-span-5 p-3">{row.subject}</div>
            <div className="col-span-3 p-3">{row.service}</div>
            <div className="col-span-2 p-3">{row.date}</div>
            <div className="col-span-2 p-3 text-right">
              {row.delivered ? (
                <span className="inline-flex items-center gap-1 text-emerald-300"><MailCheck size={16} /> Delivered</span>
              ) : (
                <span className="inline-flex items-center gap-1 text-slate-300"><Circle size={16} /> Pending</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}