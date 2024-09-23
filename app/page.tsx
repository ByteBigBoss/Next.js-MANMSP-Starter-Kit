"use client"
import React from "react";
import BlurIn from "@/components/magicui/blur-in";
import WrapperBody from '@/components/wrappers/WrapperBody';
import { BackgroundLines } from "@/components/ui/background-lines";
import {motion} from "framer-motion"

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <WrapperBody>
        {/* Aceternity */}
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="flex flex-col items-center">
            <BlurIn
              word="Next.js MANMSP Starter Kit"
              className="text-4xl font-bold text-black dark:text-white"
            />
            <motion.div
            initial={{y:20, opacity:0}}
            animate={{y:0, opacity:0.6}}
            transition={{type:"tween", duration:0.5, delay:0.4}} 
            className=" text-center pt-2 pb-4">Next.js, Mantine, Aceternity, NextUI, MagicUI, Shadcn, & PrimeReact StarterKit</motion.div>
        


          </div>
        </BackgroundLines>
      </WrapperBody>
    </div>
  );
}
