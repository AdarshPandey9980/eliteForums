import { Linkedin } from 'lucide-react'
import { Card } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  image: string
  linkedin: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Harsh Tambade",
    role: "Founder & CEO",
    image: "/assets/person1.jpg",
    linkedin: "https://www.linkedin.com/in/harsh-tambade",
  },
  {
    name: "Siddhant Mandlik",
    role: "CMO",
    image: "/assets/person2.jpg",
    linkedin: "https://www.linkedin.com/in/siddhant-mandlik-837b9421b/",
  },
  {
    name: "Suchita Nigam",
    role: "Project Manager",
    image: "/assets/person3.jpg",
    linkedin: "https://www.linkedin.com/in/suchita-nigam-04a0792a6/",
  },
]

export  function Team() {
  return (
    <section className="bg-[#0F172A] py-20 " id='team'>
      <div className="container px-4 mx-auto">
        {/* Section Title */}
        <div className="flex justify-center mb-16 relative">
          <h2 className="inline-flex items-center text-3xl font-bold text-[#06B6D4]">
            <span className="mt-[18px] text-4xl">⌞</span>
            Our Team
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-white rounded-lg overflow-hidden relative group">
              {/* Cyan Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#63daeffc] rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200 rounded-tr-full" />
              <div className="p-6 flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#06B6D4] font-medium mb-4">
                  {member.role}
                </p>

                {/* Social Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#06B6D4] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

