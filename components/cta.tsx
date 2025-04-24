import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white">Ready to Start Your Next Project?</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Contact us today to discuss how Prime Intra Limited can help bring your construction vision to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-secondary">
              Get a Free Quote
            </Link>
            <Link
              href="#services"
              className="px-6 py-3 text-white border border-white hover:bg-white hover:text-primary rounded-md transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
