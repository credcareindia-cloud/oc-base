"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Send, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("")
  const [message, setMessage] = useState("")

  const handleWhatsAppRedirect = () => {
    if (!selectedService || !message) {
      alert("Please select a service and enter your message")
      return
    }

    const whatsappMessage = `Hi! I'm interested in ${selectedService}. ${message}`
    const whatsappUrl = `https://wa.me/917012975494?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-[#2E5F66]">
      {/* Header */}
     <header className="bg-[#2E5F66] backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
    <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
      <Link href="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
        <ArrowLeft className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1.5 sm:mr-2" />
        <img
          src="oc.png"
          alt="Open Coders Logo"
          className="h-6 sm:h-7 md:h-8 w-auto"
        />
      </Link>
      <h1 className="text-white text-sm sm:text-base md:text-xl font-bold truncate ml-2">
        Contact & Support
      </h1>
    </div>
  </div>
</header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            {/* Call to Action Card */}
            <Card className="bg-[#2E5F66] backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <h2 className="text-white text-2xl font-bold mb-4">Hey! Let's hop on a call!</h2>
                    <p className="text-blue-100">
                      Get in touch with us today to discuss how we can elevate your brand. We're here to help you
                      succeed.
                    </p>
                  </div>
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                    <img
                      src="shah.jpg"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's create your digital dream...</h3>

                <div className="space-y-6">
                  <div>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="-- Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Lead generation">Lead generation</SelectItem>
                        <SelectItem value="Web development">Web development</SelectItem>
                        <SelectItem value="Mobile app development">Mobile app development</SelectItem>
                        <SelectItem value="E-commerce solutions">E-commerce solutions</SelectItem>
                        <SelectItem value="CRM solutions">CRM solutions</SelectItem>
                        <SelectItem value="Digital marketing">Digital marketing</SelectItem>
                        <SelectItem value="Business automation">Business automation</SelectItem>
                        <SelectItem value="Partnerships">Partnerships</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your project or requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Company Info */}
          <div className="space-y-8">
            {/* Office Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="oc-conference.jpg"
                alt="Open Coders Office"
                className="w-full h-54 object-cover"
              />
            </div>

            {/* Company Information */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-white text-2xl font-bold mb-6">Open Coders (Contact & Company Info)</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Email</p>
                      <p className="text-white font-medium">info@opencoders.io</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Phone</p>
                      <p className="text-white font-medium">+91 7012975494</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Address</p>
                      <div className="text-white font-medium">
                        <p>Open Coders Headquarters</p>
                        <p>Tech Park, Innovation District</p>
                        <p>Kochi, Kerala 682001</p>
                        <p>India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
