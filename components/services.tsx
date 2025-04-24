import { Truck, Ship, HardHat, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: "supply",
    name: "Supply",
    description:
      "We provide high-quality construction materials and equipment to meet your project needs with reliable delivery and competitive pricing.",
    icon: Truck,
    image: "/images/construction-planning.png",
  },
  {
    id: "export-import",
    name: "Export & Import",
    description:
      "Our global logistics network enables seamless import and export of construction materials and equipment across international borders.",
    icon: Ship,
    image: "/images/shipping-port.png",
  },
  {
    id: "contractor",
    name: "Contractor",
    description:
      "Our experienced team delivers construction projects on time and within budget, maintaining the highest standards of quality and safety.",
    icon: HardHat,
    image: "/images/construction-site.png",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description:
      "We develop and manage premium residential and commercial properties that combine innovative design with practical functionality.",
    icon: Building,
    image: "/images/construction-planning.png",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Prime Intra Limited offers comprehensive solutions across the construction industry value chain.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <Link href="#contact" className="text-primary font-medium hover:text-primary-dark flex items-center">
                  Learn more
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
