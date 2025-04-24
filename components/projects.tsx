import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial Construction",
    image: "/images/construction-site.png",
    href: "#",
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential Development",
    image: "/images/construction-planning.png",
    href: "#",
  },
  {
    title: "International Port Expansion",
    category: "Infrastructure",
    image: "/images/shipping-port.png",
    href: "#",
  },
  {
    title: "Industrial Manufacturing Facility",
    category: "Industrial Construction",
    image: "/images/construction-site.png",
    href: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link key={index} href={project.href} className="group">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm font-medium text-secondary">{project.category}</p>
                  <h3 className="text-lg font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
