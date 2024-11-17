"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack",
    description:
      "As a full stack developer, I design, develop, and maintain web applications, ensuring seamless user experiences across front-end and back-end technologies.",
    href: "",
  },
  {
    num: "02",
    title: "Database Management",
    description:
      "I specialize in database management, designing efficient schemas, optimizing queries, and ensuring data integrity for seamless application performance and scalability.",
    href: "",
  },
  {
    num: "03",
    title: "API Integration",
    description:
      "I excel in API integration, connecting diverse services and enabling seamless data exchange to enhance application functionality and user experience.",
    href: "",
  },
  {
    num: "04",
    title: "Responsive design",
    description:
      "I create responsive designs that adapt seamlessly across devices, ensuring optimal user experiences through flexible layouts and intuitive navigation.",
    href: "",
  },
];
 
const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div initial={{opacity:0}} animate={{
        opacity : 1,
        transition : {delay : 2.4, duration : 0.4, ease:'easeIn'}
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return <div className="flex-1 flex flex-col justify-center gap-6 group" key={index}>
            {/* top */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
              </Link>
            </div>
            {/* Heading */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
            {/* Description */}
            <p className="text-white/60">{service.description}</p>
            {/* Border */}
            <div className="border-b border-white/20 w-full"></div>
          </div>
        })}
      </motion.div>
    </div>
  </section>;
};

export default Services;
