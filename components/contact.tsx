"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast"
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";
import { setTimeout } from "timers";
export function Contact() {
  const { toast } = useToast();
  const [error, setError] = useState("");
  const [succes,setSucces] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length != 10) {
      setError("Mobile number should be of 10 digits");
    } else {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
  
      const result = await response.json();
      if (result.success) {
        setSucces("Thank you for contacting us, Our team will reach you soon 😊")
        handleClear();
      } else {
        setError(`${result.message} *change you email address`);
        console.log(result);
      }
    }
      
    
    setTimeout(() => {
      setError("")
      setSucces("")
    }, 4000)
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px]"
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClear}
                  className="flex-1"
                >
                  Clear
                </Button>
              </div>
              <div>
                <p className="text-red-600">{error === "" ? "" : error}</p>
                <p className="text-green-600">{succes === "" ? "" : succes}</p>
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
  );
}
