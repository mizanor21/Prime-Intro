import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/construction-site.png" alt="Construction site" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
      </div>

      <div className="relative container py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Tomorrow&apos;s World Today
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Prime Intra Limited delivers excellence in construction, supply, export & import, contracting, and real
            estate services. Dare to Dream, Dare to Achieve.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="#services" className="btn-primary">
              Our Services
            </Link>
            <Link href="#contact" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
