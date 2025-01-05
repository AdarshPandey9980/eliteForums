import {
  Laptop,
  Smartphone,
  WrenchIcon as WrenchScrewdriver,
  Search,
  Bot,
  Globe
  
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Services() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-white hover:text-cyan-400" />,
      title: "Web Development",
      description:
        "Web Development Is Crucial For Businesses As It Establishes A Strong Online Presence, Facilitating Customer Reach And Engagement. A Well-Designed Website Enhances Credibility, Fosters Brand Awareness, And Provides A Platform For Seamless Interaction With Clients, Ultimately Driving Growth And Success In The Digital Landscape.",
    },
    {
      icon: <Smartphone className="w-12 h-12  text-white hover:text-cyan-400" />,
      title: "App Development",
      description:
        "Apps Enhance Accessibility, Allowing Users To Interact With Products Or Services Conveniently, Leading To Increased Sales And Revenue. Additionally, They Provide Valuable Data Insights, Enabling Businesses To Tailor Their Strategies And Offerings Based On User Behavior, Ultimately Driving Growth And Competitiveness In The Digital Landscape.",
    },
    {
      icon: <WrenchScrewdriver className="w-12 h-12  text-white hover:text-cyan-400" />,
      title: "Software Development",
      description:
        "Software Development Is Crucial For Business As It Enables Customized Software Solutions Address Specific Organizational Needs, Fostering Innovation And Competitiveness. Additionally, It Facilitates Real-Time Data Analysis, Leading To Informed Decision-Making And Providing A Foundation For Adapting To Evolving Market Demands.",
    },
    {
      icon:<Search className="w-12 h-12  text-white hover:text-cyan-400"/>,
      title: "IT consultancy",
      description:
        "IT consultancy provides specialized guidance to businesses in optimizing technology use. Services encompass IT strategy, software implementation, cybersecurity, and digital transformation. Consultants facilitate process optimization, resource utilization, and innovation to achieve organizational objectives effectively, ensuring businesses stay competitive in today's rapidly evolving technological landscape.",
    },
    {
      icon:<Bot className="w-12 h-12  text-white hover:text-cyan-400"/>,
      title: "AI bots and chat systems",
      description:
        "AI bots and chat systems utilize artificial intelligence to simulate human-like conversation. They are employed across various industries for customer support, information retrieval, and task automation. These systems employ natural language processing and machine learning algorithms to understand and respond to user queries, improving efficiency and user experience and evoloving technological landscape.",
    },
    {
      icon:<Globe className="w-12 h-12  text-white hover:text-cyan-400"/>,
      title: "SEO optimization & Marketing",
      description:
        "SEO optimization & marketing involves strategies to improve a website's visibility in search engine results. Techniques include keyword research, on-page optimization, link building, and content creation. By optimizing for search engines, businesses increase organic traffic, enhance online visibility, and ultimately drive conversions, leading to improved brand awareness and revenue growth.",
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-flex items-center text-3xl font-bold text-[#002e5f]">
            <span className="mt-[30px] text-4xl">⌞</span>
            Services
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600">
            "We Offer A Comprehensive Range Of Services Tailored To Meet Your
            Specific Needs, Providing Solutions That Drive Growth And Success
            For Your Business. From Strategic Consulting To Innovative
            Technology Solutions, We're Committed To Delivering Exceptional
            Results That Exceed Expectations."
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
                 <span className="flex justify-center mt-[10px]"> {service.icon}</span>
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

{
  /* <figure key={index} className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <div  className='w-24 h-24 rounded-full mx-auto w-[50px] h-[50px] '>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
            <div className="pt-6 text-center space-y-4">
              <div>
                <p className="text-lg font-medium">
                {service.description}
                </p>
              </div>
              
            </div>
          </figure> */
}

{
  /* <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow "> */
}
{
  /* <CardContent className="p-6 text-center"> */
}
{
  /* <div className=" mb-6 hover:bg-[#002e5f] hover:text-white transition-colors rounded-full w-[70px] h-[70px]"> */
}
{
  /* {service.icon} */
}
{
  /* </div> */
}
{
  /* <h3 className="text-xl font-semibold mb-4"> */
}
{
  /* {service.title} */
}
{
  /* </h3> */
}
{
  /* <p className="text-gray-600"> */
}
{
  /* {service.description} */
}
{
  /* </p> */
}
{
  /* </CardContent> */
}
{
  /* </Card> */
}
