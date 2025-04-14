import { motion } from 'framer-motion'
import { FaCogs, FaProjectDiagram, FaServer, FaRedo, FaRobot, FaEye } from 'react-icons/fa'

const services = [
  {
    title: 'End-to-End Automation',
    description: 'From discovery to deployment, we automate real workflows, not just tasks.',
    icon: <FaProjectDiagram size={36} />,
  },
  {
    title: 'Process Reinvention',
    description: 'We rethink how your business operates using intelligent agents.',
    icon: <FaRedo size={36} />,
  },
  {
    title: 'Multi-Agent Architecture',
    description: 'Design modular agents that collaborate and scale across teams.',
    icon: <FaCogs size={36} />,
  },
  {
    title: 'Cloud-Native Systems',
    description: 'Built on AWS, GCP, Kubernetes - IaC included, secure and scalable.',
    icon: <FaServer size={36} />,
  },
  {
    title: 'Legacy Tool Replacement',
    description: 'Replace spreadsheets, dashboards and forms with self-operating logic.',
    icon: <FaRobot size={36} />,
  },
  {
    title: 'Intelligent Monitoring & Feedback',
    description: 'Implement autonomous monitoring and continuous learning loops that evolve with your business needs.',
    icon: <FaEye size={36} />, // Or use FaChartLine or FaSyncAlt
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#111216] p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all shadow-md hover:shadow-xl hover:drop-shadow-glow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
