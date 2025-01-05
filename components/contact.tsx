"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"
import { useToast } from "@/hooks/use-toast"
import { Phone } from 'lucide-react'
export function Contact() {
    const { toast } = useToast()
    const [error,setError] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    })
  }

  const handleClear = () => {
    if (Phone.length !== 10) {
      setError("Mobile number should be 10 digits")
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="inline-flex items-center text-3xl font-bold text-[#002e5f]">
          <span className="mt-[18px] text-4xl">⌞</span>
            Contact Us
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px]"
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Submit
                </Button>
                <Button type="button" variant="outline" onClick={handleClear} className="flex-1">
                  Clear
                </Button>
              </div>
              <div>
                <p>{error !== "" && error}</p>
              </div>
            </form>
          </div>

          <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.171026183643!2d72.83037399999999!3d19.4050151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafab65938cf52c7d%3A0x814b45330f555b7d!2sElite%20Forums!5e0!3m2!1sen!2sin!4v1736090159673!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.171026183643!2d72.83037399999999!3d19.4050151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafab65938cf52c7d%3A0x814b45330f555b7d!2sElite%20Forums!5e0!3m2!1sen!2sin!4v1736090159673!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

