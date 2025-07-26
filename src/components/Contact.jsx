import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg text-text-light mt-4 max-w-2xl mx-auto">
            Pronto para começar seu projeto? Fale conosco hoje mesmo!
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-background p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-text-dark mb-6">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-md border border-gray-300 focus:ring-primary focus:border-primary transition duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-md border border-gray-300 focus:ring-primary focus:border-primary transition duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-md border border-gray-300 focus:ring-primary focus:border-primary transition duration-200"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-primary text-secondary text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              {submitSuccess && (
                <p className="text-green-600 text-center font-semibold">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {submitError && (
                <p className="text-red-600 text-center font-semibold">
                  Erro: {submitError}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-text-dark mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4 text-text-light">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-dark">Telefone</h4>
                    <a href="tel:+5544991040774" className="hover:text-primary">
                      +55 44 99104-0774
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-dark">E-mail</h4>
                    <a
                      href="mailto:ffbrunoff@yahoo.com.br"
                      className="hover:text-primary"
                    >
                      ffbrunoff@yahoo.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-dark">Endereço</h4>
                    <p>Padre Lebret, 801, G05 Bloco 03</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
