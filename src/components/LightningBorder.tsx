'use client'
import { motion } from "framer-motion";

const borderAnimation = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
  }
};

interface AnimatedBorderBoxProps {
  children: React.ReactNode; // or a custom type
}

export const AnimatedBorderBox: React.FC<AnimatedBorderBoxProps> = ({ children }) => (
  <div className="container" style={{ overflow: 'visible', width: '200px', height: '200px' }}>

    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -5 210 210" // Ajusta el viewBox para incluir un margen alrededor del path
      className="item"
    >
      {children}
      <motion.path
        d="M10,10 h180 a10,10 0 0 1 10,10 v160 a10,10 0 0 1 -10,10 h-180 a10,10 0 0 1 -10,-10 v-160 a10,10 0 0 1 10,-10" // Un rectángulo con bordes redondeados
        stroke="white" // Color del borde
        strokeWidth="2" // Grosor del borde
        fill="transparent" // El interior del path es transparente
        variants={borderAnimation}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }, // La transición de fill puede ser omitida o ajustada según sea necesario
        }}
      />

    </motion.svg>
  </div>
);
