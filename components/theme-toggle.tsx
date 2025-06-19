"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Monitor, Check } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const

  const currentTheme = themes.find((t) => t.value === theme)
  const CurrentIcon = currentTheme?.icon || Monitor

  return (
    <div className="relative">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="border-gray-700 dark:border-gray-700 text-gray-300 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-800 bg-gray-900/50 dark:bg-gray-900/50 backdrop-blur-sm relative"
          aria-label="Toggle theme"
        >
          <motion.div animate={{ rotate: resolvedTheme === "dark" ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <CurrentIcon size={16} />
          </motion.div>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 z-50 min-w-[140px] bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-800 dark:border-gray-800 rounded-lg shadow-xl"
            >
              <div className="p-1">
                {themes.map((themeOption) => {
                  const Icon = themeOption.icon
                  const isSelected = theme === themeOption.value

                  return (
                    <motion.button
                      key={themeOption.value}
                      onClick={() => {
                        setTheme(themeOption.value)
                        setIsOpen(false)
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-md transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={16} />
                      <span className="flex-1 text-left">{themeOption.label}</span>
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Check size={14} className="text-blue-400" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
