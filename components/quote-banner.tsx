"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { off } from 'process'

export function QuoteBanner() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageXOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset,setOffset])

  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("assets/banner.jpg")',
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <blockquote className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-2xl md:text-4xl font-semibold leading-tight">
            "Engineering Is The Closest Thing To Magic That Exists In The World."
          </p>
          <footer className="mt-4 text-lg md:text-xl">
            – Elon Musk.
          </footer>
        </blockquote>
        
        <Button 
          variant="outline" 
          className="bg-white text-gray-900 hover:bg-gray-100"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Now
        </Button>
      </div>
    </section>
  )
}

