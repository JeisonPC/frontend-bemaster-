'use client'
import Login from "@/components/LoginComponent";
import React from "react";
import style from "./page.module.scss";
import { motion } from "framer-motion";


export default function page() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <section className={style.loginContainer}>
      <motion.div
        className={style.card}
        initial="hidden"
        animate="visible"
        variants={container}
        // transition={{
        //   type: "spring",
        //   stiffness: 260,
        //   damping: 20
        // }}
      >
        <motion.div variants={item}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.64 108.01" className="text-white fill-white w-2/5"><path d="M69.45 108.01 0 107.93V14.29L51.45 0l43.23 10.41v30.63l-12 9.84 12.3 10.01v26.97l-25.53 20.15ZM9.55 98.4l56.59.06 19.29-15.22V65.41L72.05 54.42v-7.15l13.08-10.74V17.94L51.62 9.87 9.55 21.54v76.85ZM124.64 84.32V29.2h23.56c14.58 0 21.9 4.53 21.9 14.5 0 4.91-2.27 9.52-7.25 11.25 5.29.91 10.72 5.97 10.72 12.61 0 9.59-6.49 16.76-18.28 16.76h-30.66Zm10.12-46.52v14.35h13.29c8 0 12.46-1.06 12.46-7.7 0-4.61-3.17-6.65-10.72-6.65h-15.03Zm0 37.98h19.41c5.29 0 9.67-2.34 9.67-7.7 0-6.27-5.97-7.63-10.49-7.63h-18.58v15.33ZM213.89 61.82c0 4.76-3.25 5.66-6.95 5.66h-21.82c.68 5.81 5.36 9.59 10.95 9.59 4.61 0 8.01-1.96 9.89-4.91l6.57 3.7c-3.7 6.27-8.68 9.14-16.91 9.14-10.5 0-19.1-8.83-19.1-20.69s7.85-19.86 19.1-19.86c10.19 0 18.27 6.87 18.27 17.37Zm-28.62-.91h20.69c-.75-5.21-4.91-8.68-10.12-8.68s-9.67 3.47-10.57 8.68ZM219.4 45.81l3.62-.83c1.59 1.28 2.95 3.4 3.85 5.28 2.04-3.02 6.57-5.81 12.53-5.81s11.33 2.94 13.29 6.8c2.49-4.08 8.31-6.8 14.27-6.8 9.21 0 16.01 5.81 16.01 16.24v23.64h-8.38v-22.2c0-5.97-3.93-9.59-9.52-9.59-3.09 0-8.15 1.96-9.51 5.21v26.58h-8.31v-22.2c0-5.59-3.93-9.59-9.14-9.59-4.38 0-10.27 3.32-10.27 6.8v24.99h-8.46V45.82ZM315.06 58.95c0-4.91-3.63-6.57-8.23-6.57-4.98 0-7.55 2.27-9.06 4.53l-5.36-5.66c1.43-2.95 6.65-6.87 13.97-6.87 12.16 0 17.14 4.83 17.14 17.59v13.44c0 2.27 1.81 3.93 4.53 3.93l-1.28 5.51c-4.61 0-7.48-1.81-8.83-4.23-2.27 2.57-5.51 4.53-12.53 4.53-11.1 0-15.56-4.98-15.56-12.16 0-14.8 20.39-10.95 25.22-14.04Zm0 13.67v-7.17c-5.28 2.04-16.31-.08-16.31 7.55 0 2.27 1.36 4.61 7.48 4.61 3.85 0 7.4-1.13 8.83-4.98ZM364.96 52.16l-6.87 4.83c-1.06-2.19-4.08-4.83-10.27-4.83-3.93 0-7.33 1.28-7.33 3.85s3.32 3.4 7.4 4.15c10.5 1.96 18.2 3.32 18.2 12.53 0 9.89-10.04 12.38-17.74 12.38-8.91 0-15.86-3.55-18.88-9.14l7.48-4.15c1.51 2.42 4.98 5.59 11.03 5.59 3.93 0 9.89-1.43 9.89-4.31 0-2.34-2.42-3.25-5.44-4-10.95-2.64-20.16-3.4-20.16-13.29 0-7.93 5.82-11.18 16.09-11.18 8.99 0 15.18 3.7 16.61 7.55ZM367.6 48.76l1.43-3.47h2.49v-7.7l9.29-7.63v15.33h14.05l-.98 7.32h-13.06v15.03c0 6.49 3.4 9.44 6.42 9.44 3.17 0 4.61-.61 6.34-2.79l4.61 7.55c-2.26 2.27-6.42 3.25-9.82 3.25-10.19 0-16.84-5.59-16.84-17.52v-15.4l-3.93-3.4Z"></path><path d="M434.5 61.82c0 4.76-3.25 5.66-6.95 5.66h-21.82c.68 5.81 5.36 9.59 10.95 9.59 4.61 0 8.01-1.96 9.89-4.91l6.57 3.7c-3.7 6.27-8.68 9.14-16.91 9.14-10.5 0-19.1-8.83-19.1-20.69s7.85-19.86 19.1-19.86c10.19 0 18.27 6.87 18.27 17.37Zm-28.62-.91h20.69c-.75-5.21-4.91-8.68-10.12-8.68s-9.67 3.47-10.57 8.68ZM440.01 84.32V45.81l5.44-.91 2.04 6.87c2.19-3.7 6.04-6.72 12.08-6.72 3.25 0 6.27.23 8.15 1.96l-1.13 8.53c-2.64-1.59-4.53-2.04-6.8-2.04-5.81 0-11.02 4.23-11.02 9.82v20.99h-8.76ZM474.7 70.22c4.63 0 6.94 2.34 6.94 7.02s-2.31 7.09-6.94 7.09-6.98-2.36-6.98-7.09 2.33-7.02 6.98-7.02Zm0 12.78c3.74 0 5.61-1.92 5.61-5.76s-1.87-5.76-5.61-5.76-5.65 1.92-5.65 5.76S470.93 83 474.7 83Zm2.95-6.98c.02 1.18-.48 1.93-1.51 2.25l1.4 2.25h-1.55l-1.26-2.07h-1.29v2.07h-1.4v-6.76h2.88c1.8 0 2.71.75 2.73 2.25Zm-1.4 0c0-.69-.44-1.03-1.33-1.03h-1.48v2.25"></path></svg>
          <Login />
        </motion.div>

      </motion.div>
    </section>
  );
}
