import { FaPaperPlane } from 'react-icons/fa'

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#0B0F14] text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Launch?
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Whether you're exploring automation or scaling AI across your org, we’re here to help design your next leap.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/mabrouk-adam/prise-de-contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl shadow hover:drop-shadow-glow transition"
          >
            <FaPaperPlane />
            Book a Meeting
          </a>
          <a
            href="mailto:you@example.com"
            className="text-sm text-gray-400 hover:text-primary underline transition"
          >
            Or email us directly
          </a>
        </div>
      </div>
    </section>
  )
}
