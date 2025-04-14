import HeroSection from './components/HeroSection'
import WhatWeDeliver from './components/WhatWeDeliver'
import WhatMakesUsStandOut from './components/WhatMakesUsStandOut'
import StackTools from './components/StackTools'
import FounderMessage from './components/FounderMessage'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div className="bg-dark text-white">
      <HeroSection />
      <WhatWeDeliver />
      <WhatMakesUsStandOut />
      <StackTools />
      <FounderMessage />
      <ContactCTA />
    </div>
  )
}

export default App
