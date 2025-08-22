import React from 'react'
import ServiceCard from '../components/ServiceCard.jsx'
import EnquiryModal from '../components/EnquiryModal.jsx'

const SERVICES = [
  "Database Development & Management",
  "IT Management",
  "Online Data Backup & Storage",
  "Software, App & Web Development",
  "Digital Marketing",
  "Digital Strategy",
  "IT Consultancy & Training",
  "SEO Experts",
  "Social Media Marketing & Management",
  "Online Payment Solutions",
  "Bulk SMS Services"
]

export default function ServicesPage(){
  const [selected, setSelected] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  function handleEnquire(title){
    setSelected(title); setOpen(true)
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Services  Offered</h2>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {SERVICES.map((name) => (
          <ServiceCard key={name} title={name} onEnquire={() => handleEnquire(name)} />
        ))}
      </div>

      <EnquiryModal service={selected} isOpen={open} onClose={()=>setOpen(false)} />
    </section>
  )
}