"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Smartphone, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const AboutSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    {
      name: "Python",
      icon: Code,
      category: "Backend",
      level: 95,
      description: "Advanced Python development with Django, FastAPI, and data science libraries",
      color: "from-yellow-500 to-green-500",
    },
    {
      name: "React",
      icon: Globe,
      category: "Frontend",
      level: 90,
      description: "Modern React development with hooks, context, and performance optimization",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Flutter",
      icon: Smartphone,
      category: "Mobile",
      level: 85,
      description: "Cross-platform mobile development with beautiful, native-like interfaces",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "PostgreSQL",
      icon: Database,
      category: "Database",
      level: 88,
      description: "Advanced database design, optimization, and complex query development",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Node.js",
      icon: Code,
      category: "Backend",
      level: 87,
      description: "Server-side JavaScript with Express, NestJS, and microservices architecture",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "TypeScript",
      icon: Globe,
      category: "Frontend",
      level: 92,
      description: "Type-safe JavaScript development for scalable applications",
      color: "from-blue-500 to-purple-500",
    },
  ]

  const timeline = [
    {
      year: "2024-2025",
      title: "Frontend Developer",
      company: "Terrahaptix",
      description: "Leading frontend development initiatives, building responsive and performant user interfaces that enhance user engagement and satisfaction. Specializing in React and Next.js applications with a focus on optimization, accessibility, and modern design patterns. Collaborating with cross-functional teams to deliver high-quality web applications that meet both user needs and business objectives.",
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2021-2025",
      title: "M.Sc. Accounting",
      company: "University of Lagos",
      description: "Pursuing advanced studies in financial systems, data analysis, and business intelligence. This program has deepened my understanding of financial modeling, risk management, and strategic decision-making. The analytical skills and quantitative methods learned here directly inform my approach to software development, particularly in financial technology applications and data-driven solutions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2017-2021",
      title: "Account Officer",
      company: "Zemkolo Nigeria Ltd",
      description: "Managed comprehensive accounting operations, built and maintained financial systems, and enforced rigorous financial standards. Played a key role in developing automated accounting processes that improved efficiency and accuracy. Supported multiple audit processes, ensuring compliance with financial regulations and standards. This experience provided deep insights into business operations, financial workflows, and the critical importance of data accuracy and system reliability.",
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2018-2019",
      title: "NYSC Teacher & Community Leader",
      company: "Nissi Progressive College",
      description: "Served as a dedicated educator, teaching Economics and Commerce to students while developing innovative teaching methods that made complex financial concepts accessible. Led community development service programs, organizing initiatives that benefited local communities. Served as an election presiding officer during national elections, demonstrating leadership, responsibility, and commitment to civic engagement. This period reinforced my passion for education and community service, values that continue to influence my work in technology.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8">
            With a foundation in accounting and a deep passion for technology, I specialize in building secure,
            scalable, and intelligent systems that bridge business needs with cutting-edge solutions.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            My journey has been a unique blend of financial expertise and technological innovation, allowing me to understand both the business logic and technical implementation required to create impactful digital solutions.
          </p>
        </motion.div>

        {/* Who I Am Section */}
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-card border-border backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground transition-colors duration-300">
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed transition-colors duration-300">
                <p className="text-base md:text-lg">
                  I am a Full-Stack Developer and Financial Analyst with a unique background that combines rigorous accounting training with cutting-edge software engineering. My academic journey began with a Bachelor's degree in Accounting from Bells University of Technology, where I developed a strong foundation in financial systems, data analysis, and business intelligence. This foundation has proven invaluable in my transition to technology, as it allows me to understand not just how to build applications, but why they matter from a business perspective.
                </p>
                <p className="text-base md:text-lg">
                  Currently pursuing my Master's degree in Accounting at the University of Lagos, I've seamlessly integrated advanced financial knowledge with modern software development practices. This dual expertise enables me to create solutions that are not only technically sound but also financially viable and strategically aligned with business objectives. My work spans across multiple industries including finance, healthcare, education, and community development, where I've delivered over 20 production-grade applications.
                </p>
                <p className="text-base md:text-lg">
                  What sets me apart is my ability to translate complex business requirements into elegant technical solutions. Having worked as an Account Officer at Zemkolo Nigeria Ltd, I understand the intricacies of financial systems, compliance requirements, and the importance of accuracy and reliability in business-critical applications. This experience has shaped my approach to software development, where I prioritize security, scalability, and maintainability in every project I undertake.
                </p>
                  </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* My Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-card border-border backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground transition-colors duration-300">
                My Development Philosophy
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed transition-colors duration-300">
                <p className="text-base md:text-lg">
                  My development philosophy is rooted in three core principles: purpose-driven design, continuous learning, and collaboration-first approach. Every technology choice I make serves a specific purpose, whether it's optimizing for performance, ensuring scalability, or improving developer experience. I believe that the best solutions emerge from understanding the problem deeply before jumping into implementation.
                </p>
                <p className="text-base md:text-lg">
                  In an industry that evolves at breakneck speed, I maintain a commitment to continuous learning. I regularly explore emerging technologies, contribute to open-source projects, and stay current with industry best practices. This dedication to growth has allowed me to master a diverse tech stack spanning frontend frameworks like React and Next.js, backend technologies including Python, Node.js, and Go, mobile development with Flutter and React Native, and various database systems.
                </p>
                <p className="text-base md:text-lg">
                  Collaboration is at the heart of everything I do. Having served as a teacher during my NYSC program and worked in team environments, I understand that the best solutions emerge from diverse perspectives. I choose technologies that enable effective team collaboration, knowledge sharing, and maintainable codebases. I'm passionate about clean code, comprehensive documentation, and creating systems that future developers can easily understand and extend.
                </p>
                <p className="text-base md:text-lg">
                  My work extends beyond just writing code. I'm deeply committed to using technology for social impact, as evidenced by my projects in healthcare, education, and community development. Whether it's building mental health platforms, educational tools, or community engagement systems, I believe technology should serve humanity and make a positive difference in people's lives.
                </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

        {/* Technical Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-card border-border backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground transition-colors duration-300">
                Technical Expertise & Specializations
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed transition-colors duration-300">
                <p className="text-base md:text-lg">
                  My technical expertise spans the full software development lifecycle, from initial concept to deployment and maintenance. On the frontend, I specialize in building responsive, performant user interfaces using React, Next.js, and TypeScript. I have extensive experience with modern UI frameworks like Tailwind CSS and component libraries such as shadcn/ui, creating design systems that are both beautiful and functional. My 3D web development skills using Three.js and React Three Fiber have enabled me to create immersive, interactive experiences that push the boundaries of web technology.
                </p>
                <p className="text-base md:text-lg">
                  On the backend, I've architected and built robust APIs and microservices using Python (Django, FastAPI, Flask), Node.js (Express, NestJS), and Go. I have deep expertise in database design and optimization, working with PostgreSQL, MongoDB, Redis, and MySQL to create efficient data models and query strategies. My background in accounting has given me a unique perspective on data integrity, transaction management, and the importance of accurate financial calculations in software systems.
                </p>
                <p className="text-base md:text-lg">
                  Mobile development is another area where I excel, having built cross-platform applications using Flutter and React Native. I understand the nuances of native mobile development, including platform-specific optimizations, push notifications, location services, and offline capabilities. My experience with containerization using Docker and CI/CD pipelines with GitHub Actions ensures that my applications are deployed reliably and efficiently.
                </p>
                <p className="text-base md:text-lg">
                  Beyond traditional software development, I have experience in data science and machine learning, using libraries like Pandas and TensorFlow to analyze data and build predictive models. This combination of software engineering and data science skills allows me to create intelligent systems that not only function well but also provide valuable insights and automation capabilities.
                </p>
        </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground transition-colors duration-300">
            Career Journey
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="bg-card border-border backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <Badge className={`bg-gradient-to-r ${item.color} text-white mb-3`}>{item.year}</Badge>
                      <h4 className="text-xl font-semibold text-foreground mb-2 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-blue-400 mb-2 font-medium">{item.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-background z-10 relative transition-colors duration-300`}
                  />
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
