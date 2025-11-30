'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, Smartphone, Globe, Database, CheckCircle, ArrowRight, Star, ShoppingCart, Calculator, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#2E5F66]">
      {/* Header */}
      <header className="bg-[#2E5F66] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <img
                src="oc.png"
                alt="Open Coders Logo"
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <span className="text-blue-200 text-sm">Quick to:</span>
               <Link href="/contact">
              <Button variant="ghost" className="text-white hover:bg-[#2E5F66]">
                Contact
              </Button>
            </Link>
             
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-blue-100 text-sm sm:text-base">4.8 based on 42 reviews</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything you vision, we can build.
            </h1>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Badge className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">Apps</Badge>
              <Badge className="bg-yellow-500 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">Software</Badge>
              <Badge className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">Web</Badge>
              <Badge className="bg-purple-500 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">AR/VR</Badge>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                <span className="text-white text-base sm:text-lg">Build a solution tailored to you</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                <span className="text-white text-base sm:text-lg">Automate your workflows and processes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                <span className="text-white text-base sm:text-lg">Building with you, as your in-house team</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="team.png"
                alt="Development team"
                className="w-full h-60 sm:h-80 object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">Live Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Solutions - Ecommerce & Accounting */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">Open Bim</span>
            </div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready-to-Launch Solutions
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
  Get started quickly with our pre-built solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Ecommerce Solution */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white text-xs px-2 py-1">E-COMMERCE</Badge>
                    <Badge className="bg-yellow-400 text-black text-xs px-2 py-1 font-semibold">STARTUP FRIENDLY</Badge>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Online Store Solution</h3>
                  <p className="text-white/90 text-sm sm:text-base mb-4">
                    Complete e-commerce platform with payment gateway, inventory management, and customer dashboard.
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Payment Gateway Integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Inventory Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Pay-as-you-grow Model</span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-white/80 text-sm line-through">₹5,000/month</div>
                    <div className="text-white text-2xl sm:text-3xl font-bold">₹999<span className="text-base font-normal">/month</span></div>
                  </div>
                   <Link href="/contact">
 <Button className="bg-white text-emerald-600 hover:bg-white/90 text-sm sm:text-base px-4 py-2">
                    Get Started
                  </Button>
            </Link>
                 
                </div>
              </CardContent>
            </Card>

            {/* Accounting Solution */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white text-xs px-2 py-1">ACCOUNTING</Badge>
                    <Badge className="bg-yellow-400 text-black text-xs px-2 py-1 font-semibold">BASIC PLAN</Badge>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Accounting Software</h3>
                  <p className="text-white/90 text-sm sm:text-base mb-4">
                    Streamline your finances with invoicing, expense tracking, and financial reporting tools.
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Invoice Generation</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Expense Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span>Financial Reports</span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-white/80 text-sm line-through">₹3,000/month</div>
                    <div className="text-white text-2xl sm:text-3xl font-bold">₹999<span className="text-base font-normal">/month</span></div>
                  </div>
                   <Link href="/contact">
           <Button className="bg-white text-indigo-600 hover:bg-white/90 text-sm sm:text-base px-4 py-2">
                    Get Started
                  </Button>
            </Link>
              
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2E5F66] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm sm:text-lg mb-2">Web Development</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Modern, responsive websites and web applications</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2E5F66] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm sm:text-lg mb-2">Mobile Apps</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Native and cross-platform mobile applications</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2E5F66] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm sm:text-lg mb-2">Custom Software</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Tailored software solutions for your business</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2E5F66] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Database className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm sm:text-lg mb-2">Database Solutions</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Robust database design and management</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects Section */}
        <div className="mb-16 lg:mb-20">
       

          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-8">Take a look at our recent projects:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 overflow-hidden hover:shadow-2xl transition-shadow">
              <CardContent className="p-6 sm:p-8 text-white relative">
                <div className="absolute top-4 right-4">
                  <img
                    src="bismi.jpeg"
                    alt="Vittap App"
                    className="w-16 h-20 sm:w-20 sm:h-28 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Bismi Mess (app)</h3>
                <p className="text-lg sm:text-xl mb-4">online food delivery</p>
                <Badge className="bg-white/20 text-white mb-4 sm:mb-6 text-xs sm:text-sm">Vitamin store</Badge>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-400 to-blue-500 overflow-hidden hover:shadow-2xl transition-shadow">
              <CardContent className="p-6 sm:p-8 text-white relative">
                <div className="absolute top-4 right-4">
                  <img
                    src="moto.jpg"
                    alt="Motoclub Platform"
                    className="w-16 h-20 sm:w-20 sm:h-28 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Motoclub</h3>
                <p className="text-lg sm:text-xl mb-4">10k visitors</p>
                <Badge className="bg-white/20 text-white mb-4 sm:mb-6 text-xs sm:text-sm">E-com platform</Badge>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-black overflow-hidden hover:shadow-2xl transition-shadow">
              <CardContent className="p-6 sm:p-8 text-white relative">
                <div className="absolute top-4 right-4">
                  <img
                    src="sabs.jpg"
                    alt="FITS-LIST App"
                    className="w-16 h-20 sm:w-20 sm:h-28 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Sabs Online</h3>
                <p className="text-lg sm:text-xl mb-4">Bussiness Automation</p>
                <Badge className="bg-yellow-500 text-black mb-4 sm:mb-6 text-xs sm:text-sm">Accounting/CRMS</Badge>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-center text-blue-200 text-base sm:text-lg mb-6 sm:mb-8">Trusted by:</h3>
          <div className="bg-white/70 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-md w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
            <div className="overflow-hidden py-3 sm:py-4 md:py-6">
              <div className="flex animate-scroll gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center justify-center">
                {[
                 { name: "Motoclub", logo: "moto.jpg" },
         { name: "EllisDon", logo: "ellsidon.png" },
             { name: "fineline", logo: "fineline.jpeg" },
        { name: "Sabs Online", logo: "sabs.jpg" },
        { name: "fineline", logo: "fineline.jpeg" },
        { name: "uniqube", logo: "uniqube.png" },
        { name: "mulk", logo: "mulk.png" },
         { name: "fineline", logo: "fineline.jpeg" },
               { name: "Adobe", logo: "moto.jpg" },
        { name: "EllisDon", logo: "ellsidon.png" },
        { name: "Tesla", logo: "sabs.jpg" },
        { name: "mulk", logo: "mulk.png" },
            { name: "fineline", logo: "fineline.jpeg" },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-12 h-6 xs:w-16 xs:h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-32 xl:h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-1 xs:p-1.5 sm:p-2"
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

      
      

        {/* CTA Section */}
        <div className="text-center">
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-[#2E5F66]  -50 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
        
          </div>
        </div>
      </div>
    </div>
  )
}