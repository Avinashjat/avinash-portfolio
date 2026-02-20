import { CgDarkMode } from "react-icons/cg";
import { motion } from "framer-motion";

function ToggleTheme({ switchTheme }) {
    return (
        <div className="relative">
            <div className="hs-tooltip [--placement:bottom] inline-block">
                <motion.button
                    onClick={switchTheme}
                    className="hs-tooltip-toggle text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 absolute top-5 right-5"
                    aria-label="Dark Mode Button"
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <CgDarkMode />

                    {/* =========== TOOLTIP TEXT =========== */}
                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm" role="tooltip">
                        Dark Mode
                    </span>
                </motion.button>
            </div>
        </div>
    );
}

export default ToggleTheme;
