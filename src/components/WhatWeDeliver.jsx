import { motion } from 'framer-motion'
import { FaBuilding, FaShoppingCart, FaUtensils, FaClinicMedical, FaBus, FaCalendarAlt } from 'react-icons/fa'

const applications = [
  {
    title: 'Real Estate Agencies',
    description: 'Property listings, virtual tours, and client management.',
    icon: <FaBuilding size={36} />,
  },
  {
    title: 'Shopping Centers',
    description: 'Interactive orientation kiosks.',
    icon: <FaShoppingCart size={36} />,
  },
  {
    title: 'Restaurants',
    description: 'Ordering tablets, voice assistants.',
    icon: <FaUtensils size={36} />,
  },
  {
    title: 'Clinics',
    description: 'Automated reception kiosks.',
    icon: <FaClinicMedical size={36} />,
  },
  {
    title: 'Transports',
    description: 'Information and ticketing kiosks.',
    icon: <FaBus size={36} />,
  },
  {
    title: 'Events',
    description: 'Interactive tablets at stands.',
    icon: <FaCalendarAlt size={36} />,
  },
]

export default function WhatWeDeliver() {
  return (
    <section className="py-24 bg-dark text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What We Deliver
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Tailored multi-agent automation designed to unlock real value in your operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {applications.map((application, index) => (
            <motion.div
              key={index}
              className="bg-[#111216] p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all shadow-md hover:shadow-xl hover:drop-shadow-glow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center text-primary mb-4">
                {application.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
              <p className="text-gray-400 text-sm">{application.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
