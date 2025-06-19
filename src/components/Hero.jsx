import React from 'react';
import profilepic from '../assets/raviKumarprofile.webp';
import { HERO_DETAILS } from '../../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Hero() {
  const {
    name,
    headline,
    currentRole,
    location,
    summary,
    contactLinks
  } = HERO_DETAILS;

  return (
    <section id="hero" className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilepic}
              alt="Profile"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* Text Info */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              {name}
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {headline}
            </motion.span>
            <motion.p variants={childVariants} className="text-stone-500 text-lg mt-2">
              {currentRole}
            </motion.p>
            <motion.p variants={childVariants} className="text-stone-400 mt-1">
              📍 {location}
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {summary}
            </motion.p>

            {/* Social + Contact Links */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2 text-xl"
            >
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </motion.div>

            {/* Resume Button */}
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              rel="noopener noreferrer"
              download
              target="_blank"
              className="bg-white rounded-full px-6 py-3 mt-6 text-sm text-stone-800 shadow-md hover:bg-stone-200"
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
