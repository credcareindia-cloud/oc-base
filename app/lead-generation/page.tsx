import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, BarChart3, Users, Zap, CheckCircle, ArrowRight, Star } from "lucide-react"

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen bg-[#2E5F66]">
      {/* Header */}
      <header className="bg-[#2E5F66]/95 backdrop-blur-sm sticky top-0 z-50 border-b border-teal-400/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
           <div className="flex items-center text-teal-300 hover:text-teal-200 transition-colors cursor-pointer">
  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
  
  <div className="w-28 h-28 rounded-lg overflow-hidden flex items-center justify-center">
    <img 
      src="oc.png" 
      alt="Logo" 
      className="w-full h-full object-contain"
    />
  </div>
</div>

            <Badge className="bg-teal-500/20 text-teal-200 border-teal-400/30 text-xs sm:text-sm">
              Lead Generation
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E5F66] via-[#3A7580] to-teal-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Grow Your Business with
            <span className="block text-teal-200 mt-2">Performance Marketing</span>
          </h1>
          <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We only get paid when you get results. No upfront costs, guaranteed ROI.
          </p>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-teal-100 text-sm sm:text-base">4.8/5 from 42+ clients</span>
          </div>

<Button asChild className="bg-white text-[#2E5F66] hover:bg-teal-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300">
  <a href="/contact" className="flex items-center justify-center">
    Get Free Strategy Call
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>
          
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              What We Do
            </h2>
            <p className="text-lg sm:text-xl text-teal-200 max-w-2xl mx-auto">
              Simple, effective marketing that delivers real results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Target,
                title: "Lead Generation",
                description: "Quality leads delivered to your inbox"
              },
              {
                icon: BarChart3,
                title: "Digital Ads",
                description: "Strategic campaigns that convert"
              },
              {
                icon: Users,
                title: "Brand Building",
                description: "Build trust and recognition online"
              },
              {
                icon: Zap,
                title: "Content Creation",
                description: "Engaging content that sells"
              }
            ].map((service, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-teal-500/30 hover:border-teal-400/50 bg-white/10 backdrop-blur-sm hover:bg-white/15">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-teal-300" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{service.title}</h3>
                  <p className="text-teal-200 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#245157]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg sm:text-xl text-teal-200">
              Choose what works for your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Starter",
                price: "₹8,999",
                period: "/month",
                description: "Perfect for small businesses",
                features: [
                  "Social media management",
                  "Basic lead generation",
                  "Monthly reports",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Growth",
                price: "₹15,999",
                period: "/month",
                description: "Best for growing companies",
                features: [
                  "Advanced lead generation",
                  "Multi-platform ads",
                  "Content creation",
                  "Weekly reports",
                  "Phone support"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large organizations",
                features: [
                  "Custom strategy",
                  "Dedicated manager",
                  "Advanced analytics",
                  "24/7 support",
                  "Priority delivery"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`p-6 sm:p-8 transition-all duration-300 relative ${
                  plan.popular 
                    ? 'border-teal-400/50 shadow-xl scale-105 bg-white/15 backdrop-blur-sm' 
                    : 'border-teal-500/30 hover:border-teal-400/50 hover:shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/15'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal-500 text-white px-3 py-1 shadow-lg">Most Popular</Badge>
                  </div>
                )}
                
                <CardContent className="p-0">
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="font-bold text-xl sm:text-2xl mb-2 text-white">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-teal-300">{plan.price}</span>
                      <span className="text-teal-200 text-lg">{plan.period}</span>
                    </div>
                    <p className="text-teal-200">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span className="text-teal-100 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 text-base transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-white/20 hover:bg-white/30 text-white border border-teal-400/30 hover:border-teal-400/50 backdrop-blur-sm'
                    }`}
                  >
                      <a href="/contact" className="flex items-center justify-center w-full">
{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
                    
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#2E5F66] to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
        
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="w-full bg-white text-[#2E5F66] hover:bg-teal-50 shadow-lg hover:shadow-xl transition-all duration-300">
  <a href="/contact" className="flex items-center justify-center">
    Get more customers
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>
          </div>
        </div>
      </section>
    </div>
  )
}