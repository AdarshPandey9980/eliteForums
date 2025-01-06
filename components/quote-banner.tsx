"use client"
import { Clock, Gift, Users, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"

export  function StatsBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 w-full px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {/* Working Hours */}
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 mb-2 opacity-90" />
              <div className="text-4xl md:text-5xl font-bold">3500</div>
              <div className="text-sm md:text-base font-medium opacity-90">Working Hours</div>
            </div>

            {/* Completed Projects */}
            <div className="flex flex-col items-center gap-2">
              <Gift className="w-8 h-8 mb-2 opacity-90" />
              <div className="text-4xl md:text-5xl font-bold">29</div>
              <div className="text-sm md:text-base font-medium opacity-90">Completed Projects</div>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col items-center gap-2">
              <Users className="w-8 h-8 mb-2 opacity-90" />
              <div className="text-4xl md:text-5xl font-bold">25</div>
              <div className="text-sm md:text-base font-medium opacity-90">Happy Clients</div>
            </div>

            {/* Awards */}
            <div className="flex flex-col items-center gap-2">
              <Trophy className="w-8 h-8 mb-2 opacity-90" />
              <div className="text-4xl md:text-5xl font-bold">2</div>
              <div className="text-sm md:text-base font-medium opacity-90">Awards</div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Background image */}
      <img
        src="/assets/info.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
        width={1920}
        height={400}
      />
    </div>
  )
}

