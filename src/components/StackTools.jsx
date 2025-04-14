import { FaAws, FaGoogle, FaCubes, FaProjectDiagram, FaStream, FaBrain } from 'react-icons/fa'
import { motion } from 'framer-motion'

const stack = [
  {
    title: 'AWS',
    description: 'Architected with best practices in IAM, serverless, and event-driven design — enabling scalable, secure, and modular agent systems.',
    icon: <FaAws size={36} />,
  },
  {
    title: 'GCP + Vertex AI',
    description: 'Vertex AI Agent Builder enables the creation, orchestration, and deployment of intelligent agents with built-in tools for context management and tight integration with frameworks like LangChain and CrewAI.',
    icon: <FaGoogle size={36} />,
  },
  {
    title: 'Terraform',
    description: 'Declarative, reproducible infrastructure for cloud-native and hybrid systems.',
    icon: <FaCubes size={36} />,
  },
  {
    title: 'N8N',
    description: 'Event-based workflows and agent triggers with visual orchestration logic.',
    icon: <FaProjectDiagram size={36} />,
  },
  {
    title: 'MCP (Model Context Protocol)',
    description: 'A standardized coordination layer enabling agents to interpret, interact, and evolve around shared model contexts.',
    icon: <FaStream size={36} />,
  },
  {
    title: 'RAG Systems',
    description: 'Agents leverage Retrieval-Augmented Generation with vector or graph-based retrieval to deliver deeply contextual responses in real time.',
    icon: <FaBrain size={36} />,
  }

  ]

export default function StackTools() {
  return (
    <section className="py-24 bg-dark text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Stack & Tools</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Our infrastructure blends standardized orchestration, agent coordination, and cloud-native automation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-[#111216] p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all shadow-md hover:shadow-xl hover:drop-shadow-glow text-center flex flex-col items-center justify-start h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-primary mb-4 flex items-center justify-center">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
