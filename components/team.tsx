import { Card } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  image: string
  socials: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Harsh Tambade",
    role: "Founder & CEO",
    image: "assets/person1.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Anas Chougle",
    role: "CTO",
    image: "assets/person2.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Shreya Mishra",
    role: "Managing Team",
    image: "assets/person3.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ruchi Ingale",
    role: "Managing Team",
    image: "assets/person4.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
]

export function Team() {
  return (
    <section className="py-20 bg-gray-900 " id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center text-3xl font-bold text-cyan-400">
          <span className="mt-[30px] text-4xl">⌞</span>
            Our Team
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="relative bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <div className="relative p-6">
                {/* Decorative shapes */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-200 rounded-tr-full" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-cyan-600 mb-4">{member.role}</p>
                    
                    <div className="flex justify-center space-x-4">
                      <a href={member.socials.facebook} className="text-gray-600 hover:text-gray-900">
                        <Facebook className="w-5 h-5 hover:text-blue-500" />
                      </a>
                      <a href={member.socials.twitter} className="text-gray-600 hover:text-gray-900">
                        <Twitter className="w-5 h-5 hover:text-blue-400" />
                      </a>
                      <a href={member.socials.instagram} className="text-gray-600 hover:text-gray-900">
                        <Instagram className="w-5 h-5 hover:text-pink-500" />
                      </a>
                      <a href={member.socials.linkedin} className="text-gray-600 hover:text-gray-900">
                        <Linkedin className="w-5 h-5 hover:text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

