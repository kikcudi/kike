"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Left Images */}
          <motion.div
            className="md:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=300" alt="Photography 1" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="md:col-span-3 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-6xl md:text-8xl font-bold text-[#DF532F]">(</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-[#DF532F] leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your brand's — <em>visual language</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-6xl md:text-8xl font-bold text-[#DF532F]">)</span>
            </motion.div>
          </div>

          {/* Right Images */}
          <motion.div
            className="md:col-span-1 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=300" alt="Photography 2" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
