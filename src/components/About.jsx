import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    'Compromisso com a qualidade',
    'Inovação em cada projeto',
    'Equipe altamente qualificada',
    'Superando as expectativas dos clientes',
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-lg transform -rotate-3"></div>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-about.jpg"
              alt="Equipe de construção da NTC Brasil em uma obra"
              className="relative w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Sobre a <span className="gradient-text">NTC Brasil</span>
            </h2>
            <p className="text-text-light mb-6 text-lg">
              A NTC Brasil é uma empresa focada no setor de construção,
              oferecendo soluções inovadoras e de alta qualidade. Nossa missão é
              transformar sonhos em realidade através de projetos arquitetônicos
              e de engenharia eficientes.
            </p>
            <p className="text-text-light mb-8 text-lg">
              Contamos com uma equipe de profissionais qualificados e
              comprometidos em entregar resultados que não apenas atendam, mas
              superem as expectativas dos nossos clientes em cada detalhe.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-text-dark font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
