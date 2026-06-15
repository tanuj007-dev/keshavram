import Navbar from '../components/Navbar'
import ServiceHeroSection from '../components/ServiceHeroSection'
import ServiceImageCarousel from '../components/ServiceImageCarousel'
import ServiceOverviewSection from '../components/ServiceOverviewSection'
import ServiceMarketingSection from '../components/ServiceMarketingSection'
import ServiceOfferingSection from '../components/ServiceOfferingSection'
import ServiceAdvertisingSection from '../components/ServiceAdvertisingSection'
import FooterSection from '../FooterSection'
import LogoCarousel from '../components/LogoCarousel'
export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar />
      <ServiceHeroSection />
      <ServiceImageCarousel />
      <ServiceOverviewSection />
      <LogoCarousel />
      <ServiceMarketingSection />
      <ServiceOfferingSection />
      <ServiceAdvertisingSection />
      <FooterSection />
    </div>
  )
}
