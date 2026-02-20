import user_info from "../../data/user_info.js";
import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      className="p-4 text-center md:flex justify-between"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}

    >
      {/* =========== GITHUB BUTTON =========== */}
      <motion.div
        className="self-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -2 }}
      >
        <GitHubButton
          href="https://github.com/avinashjat"
          data-color-scheme={theme}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star avinashjat/avinashjat on GitHub"
        >
          Github
        </GitHubButton>
      </motion.div>

      {/* =========== USER COPYRIGHT =========== */}
      <motion.p
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 0.05 }}
        viewport={{ once: true }}
      >
        {user_info.footer}
      </motion.p>

      {/* =========== SCROLL ON TOP BUTTON =========== */}
      <motion.button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ x: 6 }}
        whileTap={{ scale: 0.96 }}
      >
        <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" /> Go back to top
      </motion.button>
    </motion.footer>
  );
}

export default Footer;
