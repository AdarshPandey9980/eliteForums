'use client'

import { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface Client {
  name: string
  logo: string
}

const clients: Client[] = [
  {
    name: "Kemet Works",
    logo: "/assets/client1.png",
  },
  {
    name: "Beyond HR",
    logo: "/assets/client2.png",
  },
  {
    name: "Averance",
    logo: "/assets/client3.png",
  },
  {
    name: "Client 4",
    logo: "/assets/client4.png",
  },
  {
    name: "Client 5",
    logo: "/assets/client5.png",
  }
]

export function Clients() {
  const [api] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  )

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="inline-flex items-center text-3xl font-bold text-[#002e5f]">
            <span className="mt-[18px] text-4xl">⌞</span>
            Our Clients
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            We Don't Just Build Softwares, We Build Your Business.
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4">
                  <Card className="p-6 flex items-center justify-center h-32 border-none shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-[160px] max-h-[60px] object-contain"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="hidden md:flex" /> */}
            {/* <CarouselNext className="hidden md:flex" /> */}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

