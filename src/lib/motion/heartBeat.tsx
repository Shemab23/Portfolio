import { motion } from "framer-motion"
import { heartBeat } from "./motions"
import type { Props } from "./generalMotion"

export const HeartBeatWraper = ({ children, className, onClick }: Props) => {
  return (
    <motion.div
      className={className}
      onClick={onClick}
      variants={heartBeat}
      animate="animate"
      style={{ display: "inline-block", transformOrigin: "center center" }}
    >
      {children}
    </motion.div>
  )
}
