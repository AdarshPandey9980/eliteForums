import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
        <h2 className="inline-flex items-center text-3xl font-bold text-[#002e5f]">
          <span className="mt-[30px] text-4xl">⌞</span>
            About us
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-4xl font-bold">
            We Make Creativity Work For Your Brand!
          </h3>
          
          <p className="text-xl text-gray-600">
            We Are A Leading IT Training And Service Company,
          </p>
          
          <p className="text-xl text-gray-600">
            Dedicated To Providing Top-Notch Training Programs And Reliable IT Services To Businesses Of All Sizes.
          </p>
          
          <p className="text-2xl font-semibold mt-4">
            All. The. Time.
          </p>
          
          <div className="mt-8">
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-2 border-2 border-[#002e5f] border-primary hover:bg-[#002e5f] hover:text-white transition-colors"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

