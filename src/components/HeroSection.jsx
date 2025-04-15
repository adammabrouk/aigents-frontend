import { Canvas } from '@react-three/fiber'
import NodeSphere from '../three/NodeSphere'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white bg-dark px-6 py-12 flex flex-col sm:flex-row items-center justify-center gap-12">
      
      {/* 3D Sphere Section */}
      <div className="w-full sm:w-[45%] max-w-md aspect-square">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <color attach="background" args={['#0B0F14']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <NodeSphere />
        </Canvas>
      </div>

      {/* Text & CTA Section */}
      <div className="relative z-10 w-full sm:w-1/2 max-w-xl text-center sm:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Multi-Agent Intelligence.
          <br />
          <span className="text-primary">Automated for Your Business.</span>
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          We replace outdated workflows with intelligent, real-time agents that adapt and evolve.
        </p>
        <div className="flex justify-center sm:justify-start gap-4">
          <a
            href="https://calendly.com/mabrouk-adam/prise-de-contact"
            className="px-6 py-3 bg-primary rounded-xl text-black font-semibold shadow-md hover:drop-shadow-glow transition"
          >
            Let’s Talk
          </a>
          <a
            href="https://calendly.com/mabrouk-adam/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-xl text-white hover:border-primary hover:text-primary transition"
          >
            Plan a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
