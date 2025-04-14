import { motion } from 'framer-motion'
import { FaFlask, FaBrain, FaShieldAlt, FaPuzzlePiece, FaSyncAlt, FaCogs } from 'react-icons/fa'


const differentiators = [
  {
    title: 'Real-Time Knowledge Feeds',
    description: 'Agents stay updated through automated scrapers and evolving knowledge bases.',
    icon: <FaSyncAlt size={28} />,
  },
  {
    title: 'Scientific R&D Core',
    description: 'We apply real AI research — not buzzwords — to solve complex automation needs.',
    icon: <FaFlask size={28} />,
  },
  {
    title: 'Cybersecurity-Aware by Design',
    description: 'Built with security, compliance, and auditability in mind.',
    icon: <FaShieldAlt size={28} />,
  },
  {
    title: 'Modular & Future-Proof',
    description: 'Our agent infrastructure is built to evolve with your business.',
    icon: <FaPuzzlePiece size={28} />,
  },
  {
    title: 'Founder-Led Expertise',
    description: 'Certified AWS Architect & Databricks Engineer leading every project.',
    icon: <FaBrain size={28} />,
  },
  {
    title: 'Tailored Implementation',
    description: 'We guide you through today’s complex automation ecosystem — no cookie-cutter platforms.',
    icon: <FaCogs size={28} />, // Reusing a familiar icon
  },
]

export default function WhatMakesUsStandOut() {
  return (
    <section className="py-24 bg-[#0A0E12] text-white px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          What Makes Us Stand Out
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 md:grid md:grid-cols-3 md:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] md:min-w-0 bg-[#111216] p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all shadow-md hover:shadow-xl hover:drop-shadow-glow text-center flex flex-col items-center justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
