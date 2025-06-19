import React from 'react';
import { CONTACT, HERO_DETAILS } from '../../constants';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Quotes', href: '#quotes' },
  { label: 'Contact', href: '#contact' },
];

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alilakevin/', icon: '🔗' },
  { label: 'GitHub', href: 'https://github.com/alilakevin', icon: '🐙' },
  { label: 'Credly', href: 'https://www.credly.com/users/alilakevin', icon: '🏅' },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: '✉️' },
  { label: 'Phone', href: `tel:${CONTACT.phoneNo}`, icon: '📞' },
];

function Contact() {
  const currentYear = new Date().getFullYear();

  // Split navLinks into 3 roughly equal columns
  const chunkSize = Math.ceil(navLinks.length / 3);
  const navColumns = [
    navLinks.slice(0, chunkSize),
    navLinks.slice(chunkSize, chunkSize * 2),
    navLinks.slice(chunkSize * 2),
  ];

  return (
    <footer className="border-t border-stone-900 pt-12 pb-8 text-stone-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left: Navigation links in 3 columns */}
          <nav className="flex flex-row gap-8 md:gap-12 flex-wrap md:flex-nowrap md:w-1/3">
            {navColumns.map((col, i) => (
              <div key={i} className="flex flex-col space-y-3">
                {col.map(({ label, href }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    whileHover={{ scale: 1.05 }}
                    className="text-cyan-400 hover:underline"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            ))}
          </nav>

          {/* Center: Contact info */}
          <div className="text-center md:text-left md:w-1/3 space-y-4 text-lg">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              {CONTACT.address}
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {CONTACT.phoneNo}
            </motion.p>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="border-b border-transparent hover:border-cyan-400"
            >
              {CONTACT.email}
            </motion.a>
          </div>

          {/* Right: Contact/social links */}
          <div className="text-center md:text-right md:w-1/3 space-y-4 text-lg">
            {contactLinks.map(({ label, href, icon }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-cyan-400 hover:underline flex justify-end items-center gap-2"
              >
                <span>{icon}</span> {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 text-center text-stone-500 text-sm">
          &copy; {currentYear} {HERO_DETAILS.name}. Developed by {HERO_DETAILS.name}.
        </div>
      </div>
    </footer>
  );
}

export default Contact;
