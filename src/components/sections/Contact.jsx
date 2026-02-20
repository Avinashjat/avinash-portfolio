import user_info from "../../data/user_info.js";
import { useState } from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(user_info.main.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <motion.section
      id="contact"
      className="mt-16 pt-12 px-6 lg:px-24"
      initial="hidden"
      whileInView="show"
     viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.22 } }
      }}
    >
      {/* =========== TITLE =========== */}
      <motion.h4
        className="text-5xl font-bold text-zinc-900 dark:text-zinc-100"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
        }}
      >
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </motion.h4>

      {/* =========== DESCCRIPTION =========== */}
      <motion.p
        className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light"
        variants={{
          hidden: { opacity: 0, y: 35 },
          show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } }
        }}
      >
        {user_info.contact.description}
      </motion.p>

      {/* =========== LINKS =========== */}
      <motion.div
        className="mt-12"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18 } }
        }}
      >
        {/* =========== FACEBOOK =========== */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Link
            to={user_info.socials.leetcode}
            target="_blank"
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300"
          >
            <SiLeetcode className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on LeetCode</span>
          </Link>
        </motion.div>

        {/* =========== X =========== */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Link
            to={user_info.socials.twitter}
            target="_blank"
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
            <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on X</span>
          </Link>
        </motion.div>

        {/* =========== INSTAGRAM =========== */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Link
            to={user_info.socials.instagram}
            target="_blank"
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
            <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on Instagram</span>
          </Link>
        </motion.div>

        {/* =========== LINKEDIN =========== */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <Link
            to={user_info.socials.linkedin}
            target="_blank"
            className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
            <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
            <span className="self-center">Follow on Linkedin</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.hr
        className="mt-6 w-72 border dark:border-zinc-800"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* =========== EMAIL =========== */}
      <motion.button
        onClick={handleCopyEmail}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ x: 6 }}
        whileTap={{ scale: 0.97 }}
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{copied ? "Copied!" : user_info.main.email}</span>
      </motion.button>
    </motion.section>
  );
}

export default Contact;
