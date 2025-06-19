import React, { useState } from 'react';
import { CERTIFICATIONS } from '../../constants';
import { motion } from 'framer-motion';

function Certifications() {
  const [showAll, setShowAll] = useState(false);

  // Show first 6 if showAll is false, otherwise show all
  const visibleCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6);

  return (
    <div className='pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'
      >
        Certifications & Awards
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {visibleCerts.map((cert, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.5 }} 
            className='rounded border border-stone-700 p-4 hover:shadow-lg hover:shadow-stone-800 transition-shadow'
          >
            {cert.badge && (
              <img src={cert.badge} alt={`${cert.title} badge`} className='w-16 h-16 mb-4' />
            )}
            <h3 className='text-xl font-semibold'>{cert.title}</h3>
            <p className='text-stone-400 mb-2'>{cert.issuer}</p>
            <a 
              href={cert.link} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='text-cyan-400 underline'
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>

      {/* Show toggle button only if more than 6 certs */}
      {CERTIFICATIONS.length > 6 && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 rounded bg-cyan-500 hover:bg-cyan-600 transition-colors'
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Certifications;
