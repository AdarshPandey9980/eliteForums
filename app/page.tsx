import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import {StatsBanner} from '@/components/quote-banner'
import  {Team}  from '@/components/team'
import  {Clients}  from '@/components/clients'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Portfolio } from '@/components/portfolio'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <StatsBanner />
      <Portfolio/>
      <Clients />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

