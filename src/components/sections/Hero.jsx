// import user_info from "../../data/user_info.js";
// import { IoIosArrowForward } from "react-icons/io";
// import { motion } from "framer-motion";

// function Hero() {
//   return (
//     <section
//       id="hero"
//       className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24"
//     >
//       <div className="self-center w-full">
//         <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
//           <motion.img
//             src={user_info.main.photo}
//             alt="Avinash Jat Profile picture"
//             className="rounded-full mb-6 lg:hidden"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             viewport={{ once: true }}
//           />

//           <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm">
//             Hello! 👋 How are you doing? 🤔
//           </span>
//         </div>

//         <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
//           {/* TEXT */}
//           <motion.div
//             className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-80px" }}
//             variants={{
//               hidden: {},
//               show: {
//                 transition: {
//                   staggerChildren: 0.25
//                 }
//               }
//             }}
//           >
//             <motion.h2
//               className="text-xl"
//               variants={{
//                 hidden: { opacity: 0, y: 40 },
//                 show: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { duration: 0.8, ease: "easeOut" }
//                 }
//               }}
//             >
//               {user_info.main.role}
//             </motion.h2>

//             <motion.h1
//               className="font-black mt-3 text-5xl lg:w-[85%]"
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 show: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { duration: 0.9, ease: "easeOut" }
//                 }
//               }}
//             >
//               {user_info.main.name}
//             </motion.h1>

//             <motion.p
//               className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7"
//               variants={{
//                 hidden: { opacity: 0, y: 40 },
//                 show: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { duration: 0.85, ease: "easeOut" }
//                 }
//               }}
//             >
//               {user_info.main.description}
//             </motion.p>

//             <motion.div
//               className="flex gap-2 mt-6"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 show: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { duration: 0.8, ease: "easeOut" }
//                 }
//               }}
//             >
//               <motion.a
//                 href="#projects"
//                 className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 Projects
//               </motion.a>

//               <motion.a
//                 href="#contact"
//                 className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
//                 whileHover={{ x: 6 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <span className="self-center font-medium">Contact</span>
//                 <IoIosArrowForward className="self-center" />
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* IMAGE */}
//           <motion.div
//             className="hidden lg:block w-[480px] self-center"
//             initial={{ opacity: 0, x: 100, rotate: 6 }}
//             whileInView={{ opacity: 1, x: 0, rotate: 3 }}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <img
//               className="rounded-[10%] transform rotate-3"
//               src={user_info.main.photo}
//               alt="Avinash Jat Graduation Picture"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;







import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { useMotionValue, useTransform, useSpring, motion } from "framer-motion";


function Hero() {
  // mouse position relative to image center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // convert mouse movement → rotation
const rawRotateX = useTransform(mouseY, [-120, 120], [14, -14]);
const rawRotateY = useTransform(mouseX, [-120, 120], [-14, 14]);


const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 20 });
const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 20 });


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24 relative pointer-events-none"
    >
      <div className="self-center w-full">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle pointer-events-auto">
          <motion.img
            src={user_info.main.photo}
            alt="Avinash Jat Profile picture"
            className="rounded-full mb-6 lg:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm">
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>

        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          {/* TEXT */}
          <motion.div
            className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center pointer-events-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.25 } }
            }}
          >
            <motion.h2
              className="text-xl"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              {user_info.main.role}
            </motion.h2>

            <motion.h1
              className="font-black mt-3 text-5xl lg:w-[85%]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: "easeOut" }
                }
              }}
            >
              {user_info.main.name}
            </motion.h1>

            <motion.p
              className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.85, ease: "easeOut" }
                }
              }}
            >
              {user_info.main.description}
            </motion.p>

            <motion.div
              className="flex gap-2 mt-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                whileTap={{ scale: 0.96 }}
              >
                Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
                whileHover={{ x: 6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="hidden lg:block w-[480px] self-center pointer-events-auto cursor-pointer"
            style={{ rotateX, rotateY, perspective: 1000 }}
            initial={{ opacity: 0, x: 100, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Avinash Jat Graduation Picture"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

