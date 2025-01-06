import {
  Shield,
  BookOpenCheck,
  School
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Portfolio() {
  const services = [
    {
      icon: <School className="w-12 h-12 text-white hover:text-cyan-400" />,
      title: "Digi Sir: AI-Powered SaaS for Classroom, Institution, and Coaching Management Software",
      description:
        "Digi Sir is an advanced platform designed to streamline classroom and institution management. It offers features like attendance tracking, fee management, scheduling, and performance analytics. With AI-powered insights, it helps educators and administrators enhance operational efficiency, improve student engagement, and create data-driven strategies for academic success.",
    },
    {
      icon: (
        <Shield className="w-12 h-12  text-white hover:text-cyan-400" />
      ),
      title: "TacTik: SaaS for Security Guard Management",
      description:
        "TacTik is a comprehensive solution to manage security guards and their operations. From scheduling shifts, tracking attendance, and managing payroll to generating detailed reports, TacTik simplifies workforce management for security agencies. Its intuitive interface and automation features ensure efficient task execution and improved staff coordination.",
    },
    {
      icon: <BookOpenCheck className="w-12 h-12  text-white hover:text-cyan-400" />,
      title: "PrepAI: AI-Powered Interview Training and Simulation Platform",
      description:
        "PrepAI is an innovative platform designed to prepare individuals for job interviews. Leveraging cutting-edge AI, it provides personalized mock interviews, feedback on answers, and tips for improvement. The platform also simulates real-world interview scenarios, helping candidates build confidence and excel in their careers.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center text-3xl font-bold text-[#002e5f]">
            <span className="mt-[18px] text-4xl">⌞</span>
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
                <div className="w-24 h-24 rounded-full mx-auto w-[70px] h-[70px] mb-3 bg-gray-900 hover:text-white transition-colors rounded-full justify-center text-center flex cursor-pointer">
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
