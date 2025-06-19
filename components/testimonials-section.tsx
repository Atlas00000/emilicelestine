"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      company: "Santa Anthony Medical Centre",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Celestine's automation of our invoicing system during his internship was remarkable. He transformed our manual processes into efficient digital workflows, saving us countless hours and reducing errors significantly. His attention to detail and understanding of healthcare operations was impressive for someone so young.",
      project: "Medical Centre Automation",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 2,
      name: "Mr. Emmanuel Adebayo",
      role: "Finance Manager",
      company: "Zemkolo Nigeria Ltd",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with Celestine for over four years, I witnessed his evolution from a junior account officer to a systems architect. His ability to build robust accounting systems while maintaining financial compliance standards is exceptional. He's not just technically skilled but understands business needs deeply.",
      project: "Financial Systems Development",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 3,
      name: "Prof. Adebola Ogundimu",
      role: "Head of Department",
      company: "Bells University of Technology",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Celestine was an outstanding student who consistently demonstrated leadership qualities. As class representative, he bridged the gap between faculty and students effectively. His analytical skills in accounting combined with his tech interests made him stand out among his peers.",
      project: "Academic Leadership",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Mrs. Folake Adeyemi",
      role: "Principal",
      company: "Nissi Progressive College",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "During his NYSC service, Celestine brought innovation to our Economics and Commerce classes. His teaching methods were engaging, and he introduced digital tools that improved student comprehension. His dedication to community development was evident in every project he undertook.",
      project: "Educational Innovation",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "David Chen",
      role: "CTO",
      company: "Terrahaptix",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Celestine's frontend development skills are top-notch. He consistently delivers responsive, user-friendly interfaces that exceed expectations. His background in finance gives him a unique perspective on building business applications. He's a valuable team player who brings both technical expertise and business acumen.",
      project: "Frontend Development",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 6,
      name: "Engr. Tunde Olatunji",
      role: "Electoral Officer",
      company: "INEC Oyo State",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Celestine served as a Presiding Officer during the 2019 elections, managing over 3000 voters with exceptional professionalism. His organizational skills, attention to detail, and ability to remain calm under pressure made him one of our most reliable officers. His integrity and leadership were exemplary.",
      project: "Electoral Leadership",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const stats = [
    { label: "Client Satisfaction", value: "100%", icon: Users },
    { label: "Projects Completed", value: "15+", icon: Award },
    { label: "Years Experience", value: "5+", icon: Star },
    { label: "Industries Served", value: "6", icon: Quote },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Quote className="text-yellow-400" size={24} />
            <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500/30 px-4 py-2">
              Client Testimonials
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feedback from colleagues, supervisors, and collaborators across different industries and roles
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm text-center p-4">
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar and Info */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <div className="relative mb-4">
                        <img
                          src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                          alt={testimonials[currentTestimonial].name}
                          className="w-20 h-20 rounded-full mx-auto md:mx-0 border-4 border-gray-700"
                        />
                        <div
                          className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center`}
                        >
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-1">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-blue-400 font-medium mb-1">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-400 text-sm mb-3">{testimonials[currentTestimonial].company}</p>
                      <Badge
                        className={`bg-gradient-to-r ${testimonials[currentTestimonial].color} text-white text-xs`}
                      >
                        {testimonials[currentTestimonial].project}
                      </Badge>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                        "{testimonials[currentTestimonial].text}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              <ChevronRight size={16} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => setCurrentTestimonial(index)}
            >
              <Card
                className={`bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm ${
                  currentTestimonial === index ? "border-blue-500/50 bg-blue-900/10" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-700"
                    />
                    <div>
                      <h5 className="font-semibold text-white text-sm">{testimonial.name}</h5>
                      <p className="text-gray-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-3">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
