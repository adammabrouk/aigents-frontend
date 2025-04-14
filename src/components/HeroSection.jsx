import { Canvas } from '@react-three/fiber'
import NodeSphere from '../three/NodeSphere'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white bg-dark">
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: '#0B0F14' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <NodeSphere />
      </Canvas>

      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Multi-Agent Intelligence.
          <br />
          <span className="text-primary">Automated for Your Business.</span>
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          We replace outdated workflows with intelligent, real-time agents that adapt and evolve.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-primary rounded-xl text-black font-semibold shadow-md hover:drop-shadow-glow transition">
            Let’s Talk
          </button>
          <button className="px-6 py-3 border border-white rounded-xl text-white hover:border-primary hover:text-primary transition">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="absolute top-4 left-6 z-10 text-primary text-xl font-bold tracking-wide">
        AiGents
      </div>
    </section>
  )
}
