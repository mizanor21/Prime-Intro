import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Prime Intra Limited Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mt-4 max-w-xs">
              Prime Intra Limited is your trusted partner for construction, supply, export & import, contracting, and
              real estate services.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-secondary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-secondary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-secondary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#supply" className="text-gray-400 hover:text-secondary">
                  Supply
                </Link>
              </li>
              <li>
                <Link href="#export-import" className="text-gray-400 hover:text-secondary">
                  Export & Import
                </Link>
              </li>
              <li>
                <Link href="#contractor" className="text-gray-400 hover:text-secondary">
                  Contractor
                </Link>
              </li>
              <li>
                <Link href="#real-estate" className="text-gray-400 hover:text-secondary">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-secondary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-secondary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Construction Ave, Building City, Country</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@primeintra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Prime Intra Limited. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="#" className="hover:text-secondary">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-secondary ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
