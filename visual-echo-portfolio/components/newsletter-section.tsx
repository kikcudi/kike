"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Confidence in every shot"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Gear Icon */}
            <div className="flex justify-end">
              <div className="w-16 h-16 bg-[#DF532F] rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm font-bold text-white bg-[#DF532F] inline-block px-4 py-2 rounded mb-4">FREEBIE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#DF532F] mb-4">
                Confidence
                <br />
                in <em>every shot</em>
              </h2>
              <p className="text-sm font-bold text-[#DF532F] mb-6">FREE POSING CHECKLIST</p>
              <p className="text-[#DF532F] mb-8 leading-relaxed">
                Feeling insecure in front of the camera? This checklist will help you easily find successful poses and
                look natural and confident in every shot. Download it for free and make your photos even better!
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button type="submit" className="w-full bg-[#DF532F] hover:bg-[#DF532F]/90">
                  Get the checklist
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
