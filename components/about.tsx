import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "25+ years of industry experience",
  "Certified professional team",
  "Commitment to safety and quality",
  "Innovative construction techniques",
  "Sustainable building practices",
  "Timely project completion",
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About Prime Intra Limited</h2>
            <p className="text-gray-600 mb-8">
              Founded with a vision to transform the construction industry, Prime Intra Limited has grown to become a
              trusted name in construction, supply, export & import, contracting, and real estate services.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to deliver exceptional value to our clients through innovative solutions, quality
              workmanship, and unwavering commitment to excellence. We believe in building not just structures, but
              lasting relationships based on trust and reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-primary rounded-lg">
              <Image
                src="/images/construction-site.png"
                alt="Construction team"
                fill
                className="object-cover rounded-lg transform translate-x-4 translate-y-4"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-secondary rounded-lg">
              <Image
                src="/images/construction-planning.png"
                alt="Construction planning"
                fill
                className="object-cover rounded-lg transform -translate-x-4 -translate-y-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
