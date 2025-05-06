import React from 'react';
import { motion } from 'framer-motion';
import instructors from '../../../../public/instructor';

const Instructors = () => {
  const half = Math.ceil(instructors.length / 2);
  const rows = [instructors.slice(0, half), instructors.slice(half)];

  return (
    <div className="bg-base-100 py-16 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-neutral mb-12">
        Meet Our Instructors
      </h2>

      <div className="space-y-10">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex whitespace-nowrap animate-scroll gap-8 px-4"
          >
            {row.concat(row).map((inst, idx) => (
              <motion.div
                key={idx}
                className="relative w-40 h-40 rounded-full overflow-hidden flex-shrink-0 group transition duration-500 shadow-lg border-2 border-primary"
                animate={{ y: [0, -50, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: (idx % row.length) * 0.4 // Alada delay for each image
                }}
              >
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col text-black text-center px-2">
                  <h3 className="font-bold text-lg">{inst.name}</h3>
                  <p className="text-sm">{inst.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
