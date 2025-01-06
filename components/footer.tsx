"use client"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {

  const social: any = [
    {
      icon:Facebook,
      url:"https://www.facebook.com/people/Elite-Forums/100093019214718/"
    },
    {
      icon:Twitter,
      url:"https://x.com/elite_forums"
    },
    {
      icon:Instagram,
      url:"https://www.instagram.com/eliteforums"
    },
    {
      icon:Linkedin,
      url:"https://www.linkedin.com/company/eliteforums"
    },

  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Elite Forums</h3>
            <p className="text-gray-400">
              We are a leading IT training and service company dedicated to providing top-notch solutions for businesses of all sizes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <div onClick={() => {
                      document.getElementById(item.toLocaleLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                    }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'App Development', 'Software Development', 'IT consultancy','AI bots','SEO'].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-cyan-400" />
                Mumbai, Maharashtra
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-cyan-400" />
                +917249858976
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-cyan-400" />
                eliteforumsindia@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Elite Forums. All rights reserved.
            </p>
            <div className="flex gap-6">
              {social.map((social:any) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

