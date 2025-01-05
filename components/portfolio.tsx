import {
  Database,
  ArrowUpNarrowWide,
  Camera,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Portfolio() {
  const services = [
    {
      icon: <Database className="w-12 h-12 text-white hover:text-cyan-400" />,
      title: "Customer Relationship Management",
      description:
        "Customer Relationship Management (CRM) is a strategy for managing interactions with current and potential customers. It uses data analysis about customers' history with a company to improve business relationships, specifically focusing on customer retention and ultimately driving sales growth. CRM systems help streamline processes and enhance customer satisfaction.",
    },
    {
      icon: (
        <ArrowUpNarrowWide className="w-12 h-12  text-white hover:text-cyan-400" />
      ),
      title: "Indoor positioning system",
      description:
        "AIndoor Positioning Systems (IPS) locate and track objects or people within indoor environments using various technologies like Wi-Fi, Bluetooth, RFID, or sensors. IPS provides navigation assistance, asset tracking, and analytics for businesses, enhancing user experiences in venues like airports, malls, and hospitals, where GPS is unreliable.",
    },
    {
      icon: <Camera className="w-12 h-12  text-white hover:text-cyan-400" />,
      title: "Event Management Application",
      description:
        "Event Management Applications facilitate planning, organizing, and executing events efficiently. They offer features like attendee management, scheduling, budgeting, and promotion tools. These apps streamline communication between organizers, vendors, and attendees, enhancing coordination and ensuring seamless event experiences.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center text-3xl font-bold text-[#002e5f]">
            <span className="mt-[30px] text-4xl">⌞</span>
            Our Projects
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600">
            "The objective of IT Company is to enable a large number of youth to
            take up industry-relevant skill training that will help them in
            securing a better livelihood."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow "
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto w-[70px] h-[70px] mb-3 bg-gray-900 hover:text-white transition-colors rounded-full justify-center text-center flex">
                  <span className="flex justify-center mt-[10px]">
                    {" "}
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
          <div></div>
        </div>
      </div>
    </section>
  );
}
