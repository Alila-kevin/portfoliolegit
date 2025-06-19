import React from 'react';
import { EDUCATION } from '../../constants';
import { motion } from 'framer-motion';

function Education() {
  return (
    <div className='pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'
      >
        🎓 Education
      </motion.h2>
      <div className='space-y-10 max-w-4xl mx-auto'>
        {EDUCATION.map((item, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.5 }} 
            className='rounded border border-stone-700 p-6 bg-stone-900'
          >
            <h3 className='text-2xl font-bold text-stone-100'>{item.institution}</h3>
            <p className='text-stone-400 italic'>{item.degree}</p>
            <p className='text-sm text-stone-500 mb-2'>{item.duration}</p>
            {item.honors && <p className='text-stone-400 mb-1'><strong>Honors:</strong> {item.honors}</p>}
            {item.thesis && <p className='text-stone-400 mb-1'><strong>Thesis:</strong> {item.thesis}</p>}
            {item.coursework && (
              <div className='text-stone-400'>
                <strong>Relevant Coursework:</strong> {item.coursework.join(', ')}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
