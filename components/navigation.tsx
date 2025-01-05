"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  ['Home', '/','home'],
  ['About', '/','about'],
  ['Services', '/','services'],
  ['Portfolio', '/','portfolio'],
  ['Team', '/','team'],
  ['Contact', '/','contact'],
  ['FAQ', '/','faq'],
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm transition-colors duration-300 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href={'/'} className="flex items-center">
            <Image
              src="/assets/whiteLogo.png"
              alt="Elite Forums Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(([title, url,id]) => (
              <div
                key={title}
                // href={url}
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {title}
              </div>
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map(([title, url,id]) => (
                  <div
                    key={title}
                    // href={url}
                    className="text-gray-700 text-center text-3xl hover:text-gray-900 transition-colors text-lg"
                    onClick={() => {
                      setIsOpen(false)
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {title}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

