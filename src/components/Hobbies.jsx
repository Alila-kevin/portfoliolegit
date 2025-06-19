import React from 'react';
import { HOBBIES } from '../../constants';
import { motion } from 'framer-motion';

function Hobbies() {
  return (
    <div className='pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'
      >
        Hobbies & Personal Takeaways
      </motion.h2>
      <div className='space-y-8 max-w-4xl mx-auto'>
        {HOBBIES.map((item, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.5 }} 
            className='bg-stone-900 rounded-lg p-6 shadow-md'
          >
            <h3 className='text-2xl font-semibold mb-2'>{item.name} <span className='text-stone-500 text-sm'>({item.type})</span></h3>
            <p className='text-stone-400 text-lg'>{item.takeaway}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
