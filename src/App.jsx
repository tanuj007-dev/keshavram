import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoCarousel from './components/LogoCarousel'
import AboutSection from './components/AboutSection'
import ImpactSection from './components/ImpactSection'
import ServicesSlider from './components/ServicesSlider'
import ResultSection from './components/ResultSection'

function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <AboutSection />
      <ImpactSection />
      <ServicesSlider />
      <ResultSection />
    </div>
  )
}

export default App
