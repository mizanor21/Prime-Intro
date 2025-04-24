import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Prime Intra Limited delivered our office complex ahead of schedule and within budget. Their attention to detail and quality workmanship exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechSpace Inc.",
    rating: 5,
  },
  {
    content:
      "Working with Prime Intra Limited on our residential development was a seamless experience. Their team was professional, responsive, and delivered exceptional results.",
    author: "Michael Chen",
    role: "Director, Urban Living Developments",
    rating: 5,
  },
  {
    content:
      "The import/export services provided by Prime Intra Limited helped us source high-quality materials at competitive prices. Their logistics expertise saved us time and money.",
    author: "David Rodriguez",
    role: "Procurement Manager, Global Builders",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Prime Intra Limited.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-secondary fill-secondary" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
