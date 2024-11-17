"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkSlideBtns from "@/components/WorkSlideBtns";
import Project_1 from '../../../public/assets/Project 1.png'
import Project_2 from '../../../public/assets/Project 2.png'
import Project_3 from '../../../public/assets/Project 3.png'
const projects = [
  {
    num: "01",
    category: "Men's fashion",
    title: "project 1",
    description:
      "Created full stack e-commerce website using MERN Stack technology.Intergrated Rozarpay for payment gateway.",
    stack: [{ name: "React JS" }, { name: "Node JS" }, { name: "Tailwind CSS" }, {name : "Meterial UI"}],
    image: Project_1,
    live: "https://mensfashionapp-1.onrender.com/",
    github: "https://github.com/swafvanSFK/MensFashionApp",
  },
  {
    num: "02",
    category: "Notion clone",
    title: "project 2",
    description:
      "Developed a real-time collaborative workspace application using Next.js, TailwindCSS, Firebase, and Liveblocks, featuring dynamic document editing, AI-powered enhancements, and seamless client-server synchronization for enhanced user collaboration.",
    stack: [{ name: "Next JS" }, { name: "Typescript" }, { name: "Shadcn" }, {name : "Open AI"}],
    image: Project_2,
    live: "",
    github: "",
  },
  { 
    num: "03",
    category: "Netflix clone",
    title: "project 3",
    description:
      "Developed a Netflix-inspired clone using HTML and CSS, featuring a responsive and visually appealing interface with sections for movie thumbnails, a hero banner, and a clean layout to replicate the core look and feel of the Netflix homepage.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Tailwind CSS" }],
    image: Project_3,
    live: " https://swafvansfk.github.io/NetflixClone/",
    github: "https://github.com/swafvanSFK/NetflixClone",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper:SwiperType) => {
    // Get slide index
    const currentIndex = swiper.activeIndex;
    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.category}
              </h2>
              {/* Project discription */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      className="flex text-xl text-accent whitespace-nowrap"
                      key={index}
                    >
                      {item.name}
                      {/* Remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/60"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black px-3 rounded">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black px-3 rounded">
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-primary/20 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="image"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            {/* Buttons */}
            <WorkSlideBtns
              containerStyles={
                "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              }
              btnStyles={
                "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              }
            />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
 
export default Work;
