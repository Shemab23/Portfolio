import { motion } from "framer-motion"
import type { Props } from "./generalMotion"
import { fadeInVariant } from "./motions"

export const FadeInWraper = ({ children, className, onClick }: Props) => {
  return (
    <motion.div
      className={className}
      onClick={onClick}
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  )
}
