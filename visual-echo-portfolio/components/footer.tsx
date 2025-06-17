"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-[#DF532F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Visual Echo</h3>
            <div className="space-y-2">{/* Social media icons would go here */}</div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-sm mb-4">NAVIGATION</h4>
            <nav className="space-y-2">
              <Link href="/" className="block hover:text-white/80 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block hover:text-white/80 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="block hover:text-white/80 transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="block hover:text-white/80 transition-colors">
                About me
              </Link>
              <Link href="/faq" className="block hover:text-white/80 transition-colors">
                FAQ
              </Link>
              <Link href="/privacy" className="block hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-sm mb-4">CONTACT</h4>
            <div className="space-y-2 text-sm">
              <p>[saraphoto@gmail.com]</p>
              <p>[+16093452712]</p>
              <p>[WhatsApp]</p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-sm mb-4">Subscribe to my newsletter</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-[#DF532F]"
              >
                Sign Up
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms & conditions
            </Link>
            <Link href="/user-agreement" className="hover:text-white/80 transition-colors">
              User Agreement
            </Link>
          </div>
          <p>
            Created by{" "}
            <a
              href="https://udovykdesign.etsy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80 transition-colors"
            >
              UdovykDesign
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
