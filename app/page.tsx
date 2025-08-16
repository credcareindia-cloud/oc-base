'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react";
import { Star, ArrowRight, Target, Code, BarChart3, ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
    const scrollRef = useRef(null);
  return (
  <div className="bg-white overflow-hidden">
  <section className="relative bg-gradient-to-br from-blue-50 to-[#3A7575] h-screen">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">

      {/* Top row with Logo and Contact */}
      <div className="absolute top-6 left-0 right-0 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <img src="oc.png" alt="Open Coders Logo" className="h-8 w-auto" />
        <a href="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
        </a>
      </div>

      {/* Left Circle Photo */}
      <div className="hidden md:block absolute -left-20 top-[48%] transform -translate-y-1/2 
        w-40 h-40 lg:w-68 lg:h-68 rounded-full overflow-hidden shadow-lg">
        <img src="murshid.jpg" alt="Office workspace" className="w-full h-full object-cover" />
      </div>

      {/* Right Circle Photo */}
      <div className="hidden md:block absolute -right-20 top-[30%] transform -translate-y-1/2 
        w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
        <img src="shah.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
      </div>

      {/* Center Content */}
      <div className="h-full flex flex-col justify-center items-center text-center pt-12">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          making tech <span className="text-blue-600">affordable</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
         Empowering every business with accessible tech
         <br/>
          just start, grow, and pay as you go.
        </p>

       {/* CTA Buttons */}
<div className="flex flex-row xs:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 md:px-0">
  <a href="/lead-generation" className="w-full xs:w-auto">
    <Button 
      size="default" 
      className="w-full xs:w-auto bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg min-w-0 xs:min-w-[140px] sm:min-w-[160px]"
    >
      <span className="truncate">Lead Generation</span>
      <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
    </Button>
  </a>
  <a href="/development" className="w-full xs:w-auto">
    <Button
      size="default"
      variant="outline"
      className="w-full xs:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg bg-transparent min-w-0 xs:min-w-[140px] sm:min-w-[160px]"
    >
      <span className="truncate">Development</span>
      <Code className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
    </Button>
  </a>
</div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-gray-600">4.8 based on 42 reviews</span>
        </div>
  <h3 className="text-center text-gray-600 text-lg mb-8">Trusted by:</h3>
        {/* Trusted By */}
      <div className="bg-white/70 p-4 sm:p-6 md:p-8 rounded-xl shadow-md w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
  <div className="overflow-hidden py-4 sm:py-6">
    <div className="flex animate-scroll gap-3 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-center">
      {[
        { name: "Motoclub", logo: "moto.jpg" },
        { name: "Sabs Online", logo: "sabs.png" },
        { name: "Bismi", logo: "bismi.jpeg" },
        { name: "Candy", logo: "candy.jpg" },
        { name: "Homely Food", logo: "homely.jpg" },
        { name: "Tesla", logo: "sabs.png" },
        { name: "Netflix", logo: "bismi.jpeg" },
        { name: "Adobe", logo: "moto.jpg" },
      ].map((company, i) => (
       <div
  key={i}
  className="flex-shrink-0 w-16 h-8 xs:w-20 xs:h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-1 xs:p-1.5 sm:p-2"
>
  <img
    src={company.logo}
    alt={company.name}
    className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    style={{
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%'
    }}
  />
</div>
      ))}
    </div>
  </div>
</div>

<style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`}</style>


      </div>
    </div>
  </section>


      {/* Services Visualization */}
      <section className="py-20 bg-[#2E5F66]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              We can help you with the following:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img
                    src="marketing.jpg"
                    alt="No-Cure No-Pay Marketing"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-center">No-Cure No-Pay Marketing</h3>
               <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
  <a href="/lead-generation" className="flex items-center justify-center">
    Get more clients
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img
                    src="teamwork.jpg"
                    alt="High-end Development"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-center">High-end Development</h3>
               <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
  <a href="/development" className="flex items-center justify-center">
    Build your dream
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section id="team" className="py-20 bg-slate-600" style={{ backgroundColor: '#2E5F66' }}>
  <style jsx>{`
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `}</style>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <p className="text-gray-300 text-lg mb-2">Young professionals</p>
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">Get to know our team</h2>
    </div>
    
    <div className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="flex gap-6 pb-4 justify-center" style={{ width: "max-content", minWidth: "100%" }}>
        {[
          { name: "Shamal", role: "AI Specialist", image: "shamal.jpg" },
          { name: "Shuhaub", role: "Marketing & Ads specialist", image: "suhaib.jpg" },
          { name: "Rishad", role: "Developer", image: "rishad.jpg" },
          { name: "Bisher", role: "Developer", image: "bisher.jpg" },
          { name: "Shifan", role: "Media & Ads specialist", image: "shifan.jpg" },
          { name: "Murshid", role: "Head of Operations", image: "murshid.jpg" },
          { name: "Najaf", role: "Developer", image: "najaf.jpg" },
          { name: "Shah", role: "Creative Director", image: "shah.jpg" },
        ].map((member, index) => (
          <div 
            key={index} 
            className="relative w-72 h-96 flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-200 text-base">{member.role}</p>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="flex justify-end mt-8 pr-4">
      <div className="flex items-center text-gray-300 text-sm">
        <span className="mr-2">Scroll</span>
        <div className="w-6 h-4 flex items-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Testimonials */}

<section id="testimonials" className="py-20 bg-[#2E5F66]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
        What Our Clients Say
      </h2>
    </div>

    <div className="relative">
      {/* Add ref here */}
      <div ref={scrollRef} className="flex gap-6 overflow-hidden scroll-smooth">
        {[
          {
            name: "Ashik Motoclub",
            rating: 5,
            text: "Great company! What sets Open Coders apart is not only the great results, but also the involvement of the entire team. Short lines, no start-up costs, and yes....they just do what they promise! Thanks for the great success gentlemen!",
          },
          {
            name: "Salvey",
            rating: 5,
            text: "i like their approach to marketing ,feel like they really understand my business.",
          },
          {
            name: "Althaf",
            rating: 5,
            text: "They have thought carefully and patiently about setting up a campaign. I received new leads almost every day!",
          },
          {
            name: "Nas",
            rating: 5,
            text: "they just do what they promise!",
          },
          {
            name: "Ashok",
            rating: 5,
            text: "We had barely started when the first lead came in. When things went a bit slow, the entire team took action with valuable ideas. Open Coders is our regular and pleasant discussion partner. Thanks for that!",
          },
        ].map((testimonial, index) => (
          <Card key={index} className="w-80 flex-shrink-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <Button
          onClick={() =>
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
          }
          variant="outline"
          size="icon"
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          onClick={() =>
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
          }
          variant="outline"
          size="icon"
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>

<script>
  const scrollRef = useRef(null);
</script>


      {/* Footer */}
      <footer className="bg-[#2E5F66] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row md:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-0">
  <a href="/lead-generation">
    <Button
      size="sm"
      variant="outline"
      className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base"
    >
      Marketing
    </Button>
  </a>
  <a href="/development">
    <Button
      size="sm"
      variant="outline"
      className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base"
    >
      Development
    </Button>
  </a>
  <a href="/contact">
    <Button
      size="sm"
      variant="outline"
      className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base"
    >
      Contact
    </Button>
  </a>
</div>

          <div className="text-center mt-8">
            <p className="text-white/80">© Open Coders</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
