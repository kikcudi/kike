"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#DF532F]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-sm font-bold text-white mb-4">MY PHILOSOPHY</p>
              <p className="text-white text-lg leading-relaxed mb-8">
                Hi. My name is Sarah and I'm a professional photographer with <strong>7 years</strong> of experience.
                I've helped hundreds of brands stand out with quality visual content. I work with advertising agencies,
                businesses, and personal brands. My goal is to create images that aren't just beautiful, but work for
                your bottom line.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-white">
              <div>
                <p className="mb-2">Geography of work:</p>
                <p>[New York City / traveling nationally]</p>
              </div>
              <div>
                <p className="mb-2">Contact:</p>
                <p>[saraphoto@gmail.com]</p>
                <p>[+16093452712]</p>
                <p>[WhatsApp]</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#DF532F]"
            >
              [ More about me ]
            </Button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="About Sarah" fill className="object-cover" />
            </div>

            <div>
              <p className="text-sm font-bold text-white mb-4">WHY CHOOSE ME?</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#DF532F] rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-[#DF532F] font-medium">Deep understanding of business challenges</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#DF532F] rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-[#DF532F] font-medium">I work with natural and studio lighting</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#DF532F] rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-[#DF532F] font-medium">I help with ideas and concept of the shoot</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#DF532F] rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-[#DF532F] font-medium">Clear deadlines and agreement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
