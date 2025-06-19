"use client"

import { motion } from "framer-motion"
import { Award, Quote, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20 px-4 bg-gray-900/20 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="text-yellow-400" size={24} />
            <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500/30 px-4 py-2">
              Leadership Philosophy
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Service-Driven Leadership
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4">
                <Users className="w-10 h-10 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Leadership, to me, is about <span className="text-blue-400 font-semibold">service</span>, not
                    superiority. As class representative during my undergraduate studies, I learned that empowering
                    others and fostering trust leads to collective success.
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-300 flex items-start gap-2">
                    <Quote className="w-5 h-5 mt-0.5" /> <span>"We rise by lifting others."</span>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipSection
