"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"

const clients = [
  {
    name: "client1",
    logo: "/assets/client1.png"
  },
  {
    name: "client2",
    logo: "/assets/client2.png"
  },
  {
    name: "client3",
    logo: "/assets/client3.png"
  },
  {
    name: "client4",
    logo: "/assets/client4.png"
  },
  {
    name: "client5",
    logo: "/assets/client5.png"
  }
]

export function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white" id='clients'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="inline-flex items-center text-3xl font-bold text-[#002e5f]">
          <span className="mt-[30px] text-4xl">⌞</span>
            Our Clients
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600">
            We Don't Just Build Softwares, We Build Your Business.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center items-center px-4"
                >
                  <Card className="w-64 h-32 flex items-center justify-center p-6">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={200}
                      height={100}
                      className="max-w-full max-h-full object-contain"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

