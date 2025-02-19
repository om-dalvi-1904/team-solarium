"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {


  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 bg-gray-900 text-white `}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className={`text-8xl font-bold mb-4 text-orange-600`}
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className={`mb-8 text-gray-300`}>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className={`px-6 py-3 rounded-md transition-colors bg-orange-500 hover:bg-orange-600 text-white`}
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

