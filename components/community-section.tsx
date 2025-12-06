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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Technology and leadership are tools to uplift others—here's how I serve my community.
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Beyond my professional work, I'm deeply committed to using my skills and knowledge to make a positive impact in my community. My journey in community service began during my National Youth Service Corps (NYSC) program, where I discovered the profound satisfaction that comes from teaching, mentoring, and empowering others. This experience shaped my understanding that technology and education are powerful tools for social change, and I've carried this philosophy throughout my career.
          </p>
        </motion.div>

        {/* Additional Community Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gray-900/40 border-white/10 backdrop-blur-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">A Commitment to Service</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My approach to community engagement is rooted in the belief that everyone has something valuable to contribute, and that technology can be a great equalizer when used thoughtfully and inclusively. During my time as a teacher, I introduced digital tools and modern teaching methods that made complex economic concepts more accessible to students, many of whom were experiencing these subjects for the first time.
                </p>
                <p>
                  As an election presiding officer, I learned the importance of transparency, accountability, and meticulous attention to detail—qualities that I now bring to every software project I work on. Managing a polling unit with over 3,000 voters required not just organizational skills, but also the ability to remain calm under pressure, communicate clearly with diverse groups of people, and ensure that every process was conducted fairly and accurately.
                </p>
                <p>
                  These experiences have taught me that effective leadership isn't about having all the answers, but about creating environments where others can thrive, learn, and contribute. Whether I'm leading a development team, teaching a class, or organizing a community event, I strive to foster collaboration, encourage questions, and celebrate the unique perspectives that each person brings to the table.
                </p>
                <p>
                  Today, I continue to look for opportunities to give back, whether through open-source contributions, technical mentorship, or projects that address social challenges. I believe that the tech community has a responsibility to use its collective knowledge and resources to create positive change, and I'm committed to doing my part in that effort.
                </p>
              </div>
            </CardContent>
          </Card>
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
              <Card className="bg-gray-900/40 border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl h-full">
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
