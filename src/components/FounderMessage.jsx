import { motion } from 'framer-motion'
import { FaUserTie, FaCertificate, FaLock } from 'react-icons/fa'

export default function FounderMessage() {
  return (
    <section className="py-24 bg-[#0A0E12] text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Message from the Founder
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          AiGents was born from a deep belief: automation should be intelligent, adaptable, and designed by people who understand both the science and the systems behind it. With a background in data platforms, cloud architecture, and cybersecurity, I founded AiGents to bring modular, agent-based systems to organizations ready to evolve.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-sm text-gray-300">
          <div className="bg-[#111216] p-6 rounded-xl border border-gray-800 shadow-md">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <FaCertificate />
              <span className="font-semibold">Certified AWS Architect</span>
            </div>
            <p>
              Expertise in designing secure, scalable, serverless architectures tailored for agent orchestration and cost efficiency.
            </p>
          </div>

          <div className="bg-[#111216] p-6 rounded-xl border border-gray-800 shadow-md">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <FaCertificate />
              <span className="font-semibold">Certified Databricks Engineer</span>
            </div>
            <p>
              Specialization in data pipelines, distributed systems, and making real-time data usable for AI agents.
            </p>
          </div>

          <div className="bg-[#111216] p-6 rounded-xl border border-gray-800 shadow-md">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <FaLock />
              <span className="font-semibold">Security-Aware Development</span>
            </div>
            <p>
              Strong interest in cybersecurity — with attention to privacy, secure agent behavior, and compliance in automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
