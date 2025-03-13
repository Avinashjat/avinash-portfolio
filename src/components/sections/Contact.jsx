import user_info from "../../data/user_info.js";
import { useState } from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import {  FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";


function Contact() {

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(user_info.main.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Show "Copied!" for 1 second
  };

  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {/* =========== FACEBOOK =========== */}
        <a
          href={user_info.socials.leetcode}
          target="_blank"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300"
        >
          <SiLeetcode className="self-center text-lg text-red-800 dark:text-red-500" />

          <span className="self-center">Follow on LeetCode</span>
        </a>

        {/* =========== X =========== */}
        <a
          href={user_info.socials.twitter}
          target="_blank"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on X</span>
        </a>
        
        {/* =========== INSTAGRAM =========== */}
        <a
          href={user_info.socials.instagram}
          target="_blank"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Instagram</span>
        </a>

        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          target="_blank"
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Linkedin</span>
        </a>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <button
        onClick={handleCopyEmail}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 gap-4"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        
        <span>{copied ? "Copied!" : user_info.main.email}</span>
      </button>
    </section>
  );
}

export default Contact;
