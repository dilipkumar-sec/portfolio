import { CertificationCard } from '@/components/certification-card'
import { Section } from '@/components/section'
import { certifications } from '@/lib/site-config'

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="03"
      title="Certifications & Training"
      description="Structured training paths I have completed or am currently working through."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <li key={certification.shortName}>
            <CertificationCard certification={certification} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
