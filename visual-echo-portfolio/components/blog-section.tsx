"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Object photography: how to make a product visually appealing",
    image: "/placeholder.svg?height=300&width=400",
    href: "/blog/object-photography",
  },
  {
    title: "Secrets of dynamic shots for fashion photography",
    image: "/placeholder.svg?height=300&width=400",
    href: "/blog/fashion-photography",
  },
  {
    title: "How to prepare for an interior shoot?",
    image: "/placeholder.svg?height=300&width=400",
    href: "/blog/interior-shoot",
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Read interesting stuff
            <br />
            on my blog
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button variant="default" className="bg-[#DF532F] hover:bg-[#DF532F]/90">
              [ Read more ]
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={post.href} className="group block">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#DF532F] transition-colors">
                  {post.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
