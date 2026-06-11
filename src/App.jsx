import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoCarousel from './components/LogoCarousel'
import AboutSection from './components/AboutSection'
import ImpactSection from './components/ImpactSection'
import ServicesSlider from './components/ServicesSlider'
import ResultSection from './components/ResultSection'
import FaqSection from './components/FaqSection'
import LatestInsights from './components/LatestInsights'
import HeroSection1 from './components/herosection1'
import FooterSection from './FooterSection'

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
      <FaqSection />  
      <LatestInsights />
      <HeroSection1 />
      <FooterSection />
    </div>
   )
    
  
}

export default App
