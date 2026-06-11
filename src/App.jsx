import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoCarousel from './components/LogoCarousel'
import AboutSection from './components/AboutSection'
import ImpactSection from './components/ImpactSection'

function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <AboutSection />
      <ImpactSection />
    </div>
  )
}

export default App
