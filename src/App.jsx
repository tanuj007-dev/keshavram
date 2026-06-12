import Navbar from './components/Navbar'

import HeroSection from './components/HeroSection'

import LogoCarousel from './components/LogoCarousel'

import AboutSection from './components/AboutSection'

import ImpactSection from './components/ImpactSection'

import ServicesSlider from './components/ServicesSlider'

import ResultSection from './components/ResultSection'

import CaseStudiesSection from './components/CaseStudiesSection'

import TestimonialsSection from './components/TestimonialsSection'

import FaqSection from './components/FaqSection'

import LatestInsights from './components/LatestInsights'

import HeroSection1 from './components/herosection1'

import FooterSection from './FooterSection'

import { useScrollReveal } from './hooks/useScrollReveal'



function ScrollSection({ children }) {

  return <div className="scroll-reveal w-full">{children}</div>

}



function App() {

  useScrollReveal()



  return (

    <div className="min-h-screen w-full bg-white font-sans">

      <Navbar />

      <HeroSection />

      <ScrollSection>

        <LogoCarousel />

      </ScrollSection>

      <ScrollSection>

        <AboutSection />

      </ScrollSection>

      <ScrollSection>

        <ImpactSection />

      </ScrollSection>

      <ScrollSection>

        <ServicesSlider />

      </ScrollSection>

      <ScrollSection>

        <ResultSection />

      </ScrollSection>

      <ScrollSection>

        <CaseStudiesSection />

      </ScrollSection>

      <ScrollSection>

        <TestimonialsSection />

      </ScrollSection>

      <ScrollSection>

        <FaqSection />

      </ScrollSection>

      <ScrollSection>

        <LatestInsights />

      </ScrollSection>

      <ScrollSection>

        <HeroSection1 />

      </ScrollSection>

      <ScrollSection>

        <FooterSection />

      </ScrollSection>

    </div>

  )

}



export default App

