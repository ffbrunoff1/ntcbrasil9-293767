import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-secondary to-background pt-32 pb-20 md:pt-48 md:pb-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-text-dark leading-tight mb-4"
            variants={itemVariants}
          >
            Transformando Sonhos em Realidade com{' '}
            <span className="gradient-text">Excelência em Construção</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-light max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Projetos inovadores e de alta qualidade para superar suas
            expectativas. Construa o futuro com a NTC Brasil.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contato"
              className="inline-flex items-center bg-primary text-secondary text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              Solicite um Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(88, 178, 224, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(88, 178, 224, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
