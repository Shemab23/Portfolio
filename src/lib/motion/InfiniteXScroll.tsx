import { useState } from "react"
import { motion } from "framer-motion"
import { InfiniteScrollxleft, InfiniteScrollxright } from "./motions"
import type { Props } from "./generalMotion"

export const InfiniteScrollWraper = ({
  children,
  className,
  onClick,
  direction,
}: Props & { direction: "left" | "right" }) => {
  const variant =
    direction === "left" ? InfiniteScrollxleft : InfiniteScrollxright

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <motion.div
        className={`${className} flex w-max cursor-pointer`}
        variants={variant}
        animate={isHovered ? "paused" : "animate"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </div>
  )
}
