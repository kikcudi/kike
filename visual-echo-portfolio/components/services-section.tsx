"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Advertising photography for business",
    description: "Effective publicity photos that sell!",
    image: "/placeholder.svg?height=600&width=400",
    href: "/advertising",
  },
  {
    title: "Personal and brand photo shoots",
    description: "Quality subject photography - the visual language of your brand",
    image: "/placeholder.svg?height=600&width=400",
    href: "/personal",
  },
  {
    title: "Product photography",
    description: "Professional product shots that showcase your items perfectly",
    image: "/placeholder.svg?height=600&width=400",
    href: "/product",
  },
  {
    title: "Real estate and interior photography",
    description: "Stunning architectural and interior photography",
    image: "/placeholder.svg?height=600&width=400",
    href: "/real-estate",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-[#DF532F] mb-4">WHAT I DO? MY SERVICES</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={service.href} className="block">
                <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-[#DF532F] font-medium">{service.description}</p>
                  <Button
                    variant="outline"
                    className="border-[#DF532F] text-[#DF532F] hover:bg-[#DF532F] hover:text-white"
                  >
                    [ {service.title} ]
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
