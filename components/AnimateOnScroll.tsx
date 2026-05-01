"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function AnimateOnScroll({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}: AnimateOnScrollProps) {
  
  const getInitialY = () => {
    if (direction === 'up') return 50;
    if (direction === 'down') return -50;
    return 0;
  };
  
  const getInitialX = () => {
    if (direction === 'left') return 50;
    if (direction === 'right') return -50;
    return 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: getInitialY(), x: getInitialX() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.15, margin: "0px 0px -50px 0px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94], 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
