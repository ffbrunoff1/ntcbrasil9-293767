import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Building, Users, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Planejamento de Precisão',
      description:
        'Desenvolvemos planos detalhados para garantir que cada projeto seja executado com máxima eficiência e dentro do cronograma.',
    },
    {
      icon: ShieldCheck,
      title: 'Qualidade Garantida',
      description:
        'Utilizamos os melhores materiais e práticas de construção para assegurar a durabilidade e segurança de cada obra.',
    },
    {
      icon: Building,
      title: 'Soluções Inovadoras',
      description:
        'Aplicamos tecnologias e métodos construtivos modernos para criar espaços funcionais e esteticamente superiores.',
    },
    {
      icon: Users,
      title: 'Gestão de Projetos',
      description:
        'Coordenamos todas as etapas do projeto, da concepção à entrega, garantindo comunicação clara e resultados impecáveis.',
    },
    {
      icon: HardHat,
      title: 'Execução Especializada',
      description:
        'Nossa equipe de campo é composta por profissionais experientes e dedicados a transformar o projeto em realidade com perfeição.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Nossos <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="text-lg text-text-light mt-4 max-w-2xl mx-auto">
            Descubra por que a NTC Brasil é a escolha certa para o seu próximo
            grande projeto.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-8 rounded-xl shadow-custom-light hover:shadow-custom-hover hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="flex-shrink-0 bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
