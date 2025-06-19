import React from 'react';
import { QUOTES } from '../../constants';
import { motion } from 'framer-motion';

function Quotes() {
  return (
    <div className='pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'
      >
        Quotes & Life Principles
      </motion.h2>
      <div className='max-w-3xl mx-auto space-y-10'>
        {QUOTES.map((quote, index) => (
          <motion.blockquote 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.5 }} 
            className='border-l-4 border-cyan-500 pl-4 italic text-xl text-stone-300'
          >
            “{quote.text}”
            <footer className='mt-2 text-right text-stone-500'>— {quote.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
