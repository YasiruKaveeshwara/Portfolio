import React from "react";
import { TbBrandKotlin, TbBrandThreejs } from "react-icons/tb";
import { FaDartLang, FaReact, FaNode, FaFlutter, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiMysql, SiSqlite, SiTailwindcss } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import CIcon from "../assets/images/cIcon.png";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <motion.section
        className='skills mb-14'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <h2 className='relative flex items-center pb-8 text-3xl font-bold border-r about text-myBlue whitespace-nowrap'>Skills</h2>
        <div className='flex gap-8 pb-8 '>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='flex-1 rounded-lg bg-secondBg skill'>
            <div>
              <h3 className='mt-6 text-2xl font-bold text-center'>Programming languages</h3>
              <div className='relative flex items-center py-8 '>
                <div className='flex flex-col gap-4 mx-auto'>
                  <div className='flex items-center gap-4 '>
                    <i class='fa-brands fa-java text-3xl text-myBlue'></i>
                    <p>Java</p>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <i class='fa-brands fa-python text-3xl text-myBlue'></i>
                    <p>Python</p>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <TbBrandKotlin className='text-3xl text-myBlue' />
                    <p>Kotlin</p>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <i class='fa-solid fa-c text-3xl text-myBlue ml-1'></i>
                    <p>C</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 mx-auto'>
                  <div className='flex items-center gap-4'>
                    <i class='fa-brands fa-js text-3xl text-myBlue ml-1'></i>
                    <p>JavaScript</p>
                  </div>
                  <div className='flex items-center gap-4'>
                    <i class='fa-brands fa-php text-3xl text-myBlue'></i>
                    <p>PHP</p>
                  </div>

                  <div className='flex items-center gap-4 ml-1'>
                    <FaDartLang className='text-3xl text-myBlue' />
                    <p>Dart</p>
                  </div>

                  <div className='flex items-center gap-4 ml-1'>
                    <img src={CIcon} alt='C' className='w-8 ' />
                    <p>C++</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex-1 rounded-lg bg-secondBg skill'>
            <h3 className='mt-6 text-2xl font-bold text-center'>Web Development</h3>
            <div className='relative flex items-center py-8 '>
              <div className='flex flex-col gap-4 mx-auto'>
                <div className='flex items-center gap-4 '>
                  <FaHtml5 className='text-3xl text-myBlue' />
                  <p>Html5</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <FaCss3 className='text-3xl text-myBlue' />
                  <p>CSS3</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <SiTailwindcss className='text-3xl text-myBlue' />
                  <p>Tailwind CSS</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <FaFlutter className='ml-1 text-3xl text-myBlue' />
                  <p>Flutter</p>
                </div>
              </div>
              <div className='flex flex-col gap-4 mx-auto'>
                <div className='flex items-center gap-4'>
                  <FaReact className='ml-1 text-3xl text-myBlue' />
                  <p>React Js</p>
                </div>
                <div className='flex items-center gap-4'>
                  <SiExpress className='text-3xl text-myBlue' />
                  <p>Express </p>
                </div>

                <div className='flex items-center gap-4 ml-1'>
                  <FaNode className='text-3xl text-myBlue' />
                  <p>Node Js</p>
                </div>

                <div className='flex items-center gap-4 ml-1'>
                  <TbBrandThreejs className='text-3xl text-myBlue' />
                  <p>Three Js</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex-1 rounded-lg bg-secondBg skill'>
            <h3 className='mt-6 text-2xl font-bold text-center'>Web Development</h3>
            <div className='relative flex items-center py-8 '>
              <div className='flex flex-col gap-4 mx-auto'>
                <div className='flex items-center gap-4 '>
                  <FaHtml5 className='text-3xl text-myBlue' />
                  <p>Html5</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <FaCss3 className='text-3xl text-myBlue' />
                  <p>CSS3</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <SiTailwindcss className='text-3xl text-myBlue' />
                  <p>Tailwind CSS</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <FaFlutter className='ml-1 text-3xl text-myBlue' />
                  <p>Flutter</p>
                </div>
              </div>
              <div className='flex flex-col gap-4 mx-auto'>
                <div className='flex items-center gap-4'>
                  <FaReact className='ml-1 text-3xl text-myBlue' />
                  <p>React Js</p>
                </div>
                <div className='flex items-center gap-4'>
                  <SiExpress className='text-3xl text-myBlue' />
                  <p>Express </p>
                </div>

                <div className='flex items-center gap-4 ml-1'>
                  <FaNode className='text-3xl text-myBlue' />
                  <p>Node Js</p>
                </div>

                <div className='flex items-center gap-4 ml-1'>
                  <TbBrandThreejs className='text-3xl text-myBlue' />
                  <p>Three Js</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <ul className='pl-8 text-lg list-disc '>
          <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
          <li>Flutter & Firebase for mobile app development</li>
          <li>JavaScript (ES6+), TypeScript, HTML & CSS</li>
          <li>Java & Kotlin for mobile and backend development</li>
          <li>API Integration and Cloud Services</li>
          <li>UI/UX Design & Agile Methodologies</li>
          <li>Database Management (MySQL, MongoDB, Oracle, Firebase)</li>
          <li>Version Control (Git, GitHub)</li>
        </ul>
      </motion.section>
    </>
  );
}
