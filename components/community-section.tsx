"use client"

import { motion } from "framer-motion"
import { Users, HeartHandshake, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CommunitySection = () => {
  const initiatives = [
    {
      icon: HeartHandshake,
      title: "NYSC Civic Service",
      year: "2018-2019",
      description:
        "Led outreach programs on literacy, health, and citizenship in rural Oyo State, impacting 1 000+ students.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Election Presiding Officer",
      year: "2019",
      description:
        "Managed a polling unit of 3 000+ voters during Nigeria’s presidential election with 0 % incident rate.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: BookOpen,
      title: "Community Teaching",
      year: "2018-2019",
      description:
        "Taught Economics & Commerce at Nissi Progressive College, introducing digital tools and modern pedagogy.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="community" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="text-green-400" size={24} />
            <Badge className="bg-green-600/20 text-green-400 border-green-500/30 px-4 py-2">
              Community Development
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Giving Back &amp; Leading Change
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technology and leadership are tools to uplift others—here’s how I serve my community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 mb-5 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs mb-3">
                    {item.year}
                  </Badge>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
