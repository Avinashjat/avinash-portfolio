import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="mx-4 lg:mx-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.18 } }
      }}
    >
      {/* =========== SKILLS TITLE =========== */}
      <motion.h4
        className="text-4xl font-bold text-center mt-20 dark:text-white"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
        }}
      >
        Technologies I Use.
      </motion.h4>

      {/* =========== LIST OF SKILLS =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        {[
          { icon: <FaHtml5 className="text-2xl" />, name: "HTML" },
          { icon: <FaCss3Alt className="text-2xl" />, name: "CSS" },
          { icon: <IoLogoJavascript className="text-2xl" />, name: "JavaScript" },
          { icon: <FaReact className="text-2xl" />, name: "React" },
          { icon: <SiExpress className="text-2xl" />, name: "Express" },
          { icon: <FaNodeJs className="text-2xl" />, name: "NodeJS" },
          { icon: <SiTailwindcss className="text-2xl" />, name: "Tailwind" },
          { icon: <FaGitAlt className="text-2xl" />, name: "Git" },
          { icon: <DiGithubAlt className="text-2xl" />, name: "Github" },
          { icon: <BiLogoNetlify className="text-2xl" />, name: "Netlify" },
          { icon: <CgVercel className="text-2xl" />, name: "Vercel" },
          { icon: <SiPostman className="text-2xl" />, name: "Postman" },
          { icon: <SiCplusplus className="text-2xl" />, name: "C++" },
          { icon: <DiMongodb className="text-2xl" />, name: "MongoDB" },
          { icon: <SiMysql className="text-2xl" />, name: "SQL" },
          { icon: <FaPython className="text-2xl" />, name: "Python" },
          { icon: <BiLogoTypescript className="text-2xl" />, name: "TypeScript" },
          { icon: <SiRedux className="text-2xl" />, name: "Redux" }
        ].map((skill, index) => (
          <motion.span
            key={index}
            className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.96 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, ease: "easeOut" }
              }
            }}
            whileHover={{ y: -8, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {skill.icon} {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
