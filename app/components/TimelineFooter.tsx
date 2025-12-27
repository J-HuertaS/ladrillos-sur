"use client"

import { motion } from "framer-motion"

interface TimelineFooterProps {
  years: string[]
  currentIndex: number
}

const ITEM_WIDTH = 96 // pX

export default function TimelineFooter({
  years,
  currentIndex,
}: TimelineFooterProps) {

  const offset =
    -(currentIndex * ITEM_WIDTH) +
    (ITEM_WIDTH / 2)

  return (
    <div className="relative w-full overflow-hidden py-6 px-8">
      
      {/* Viewport */}
      <div className="relative mx-auto max-w-md overflow-hidden">
        
        {/* Track */}
        <motion.ul
          className="flex items-center"
          animate={{ x: offset }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {years.map((year, index) => {
            const isActive = index === currentIndex

            return (
              <li
                key={year}
                className={`
                  flex items-center justify-center
                  w-24 shrink-0
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-2xl font-bold text-[var(--color-primary)] scale-110"
                      : "text-sm text-stone-400 scale-90"
                  }
                `}
              >
                {year}
              </li>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
}
