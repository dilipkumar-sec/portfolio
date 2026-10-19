import { About } from '@/components/about'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { LearningJourney } from '@/components/learning-journey'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <LearningJourney />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
