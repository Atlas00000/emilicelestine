"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile, isMobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
              <Link href="/">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-lg sm:text-xl">
                  CE
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-800">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                        pathname === item.href
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link href="/contact">
                <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm">
                  Book a Call
                </Button>
              </Link>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 sm:p-3 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-300 touch-manipulation"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href}>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full text-left px-4 py-4 rounded-lg transition-colors touch-manipulation ${
                        pathname === item.href
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      <span className="text-base font-medium">{item.name}</span>
                    </motion.button>
                  </Link>
                ))}
                <div className="pt-2">
                  <Link href="/contact">
                    <Button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-medium text-base touch-manipulation"
                    >
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navigation
