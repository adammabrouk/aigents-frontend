import { Canvas } from '@react-three/fiber'
import NodeSphere from '../three/NodeSphere'
import { useState, useEffect } from 'react'
import vapi from '@vapi-ai/web'

export default function HeroSection() {
  const [callActive, setCallActive] = useState(false)
  const [volumeLevel, setVolumeLevel] = useState(0)

  const startCall = async () => {
    setCallActive(true)
    const call = await vapi.start('your-assistant-id')
    vapi.on('volume-level', (volume) => {
      setVolumeLevel(volume)
    })
    vapi.on('call-end', () => {
      endCall()
    })
  }

  const endCall = () => {
    setCallActive(false)
    vapi.stop()
  }

  useEffect(() => {
    if (callActive) {
      vapi.on('call-start', () => {
        console.log('Call has started.')
      })
    }
  }, [callActive])

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white bg-dark px-6 py-12 flex flex-col sm:flex-row items-center justify-center gap-12">
      
      {/* 3D Sphere Section */}
      <div className={`w-full sm:w-[45%] max-w-md aspect-square ${callActive ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : ''}`}>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <color attach="background" args={['#0B0F14']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <NodeSphere />
        </Canvas>
      </div>

      {/* Text & CTA Section */}
      {!callActive && (
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
            <button
              onClick={startCall}
              className="px-6 py-3 bg-primary rounded-xl text-black font-semibold shadow-md hover:drop-shadow-glow transition"
            >
              Let’s Talk
            </button>
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
      )}

      {/* End Call Button */}
      {callActive && (
        <button
          onClick={endCall}
          className="absolute bottom-10 px-6 py-3 bg-red-600 rounded-xl text-white font-semibold shadow-md hover:drop-shadow-glow transition"
        >
          End Call
        </button>
      )}

      {/* Blue Light Animation */}
      {callActive && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${volumeLevel * 100}px`,
            height: `${volumeLevel * 100}px`,
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            borderRadius: '50%',
            transition: 'width 0.1s, height 0.1s',
          }}
        />
      )}
    </section>
  )
}
