"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RecentProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <motion.p
            className="text-sm font-bold text-[#DF532F]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            RECENT PROJECTS
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button variant="default" className="bg-[#DF532F] hover:bg-[#DF532F]/90">
              [ View all works ]
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio/cocktails" className="group block">
              <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Advertising company for author's cocktails"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#DF532F] mb-2">
                Advertising company for <em>author's cocktails</em>
              </h3>
            </Link>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio/remembering" className="group block">
              <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Remembering the past"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#DF532F] mb-2">
                "Remembering <br />
                <em>the past"</em>
              </h3>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
