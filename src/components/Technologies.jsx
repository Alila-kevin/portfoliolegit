import React from 'react';
import { TECHNOLOGIES } from '../../constants';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [0, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies & Tools
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {TECHNOLOGIES.map((section, idx) => (
          <motion.div
            key={idx}
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5 + idx)}
            className="bg-stone-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="mb-4 text-xl font-semibold text-white border-b border-stone-700 pb-2">
              {section.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {section.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-stone-800 px-3 py-2 rounded text-stone-300 text-sm"
                  >
                    <span className="text-xl">
                      {typeof Icon === 'string' ? Icon : <Icon />}
                    </span>
                    {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
