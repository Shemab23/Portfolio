import { type Variants } from "framer-motion"
import { motionSpeed } from "./general"

export const heartBeat: Variants = {
    animate: {
        scale: [1, 1.15, 1.05, 1.2, 1],
        transition: {
            duration: 1.7,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.15, 0.3, 0.45, 1],
            ease: "easeInOut"
        }
    }
}


export const fadeInVariant: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const InfiniteScrollxleft:Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: motionSpeed,
      ease: "linear",
    },
  },
}
export const InfiniteScrollxright:Variants = {
  animate: {
    x: ["-50%","0%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: motionSpeed,
      ease: "linear",
    },
  },
}
