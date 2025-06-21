import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiUser, FiMail, FiMessageCircle, FiSun, FiMoon } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef();
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    );

    // Initialize EmailJS with your public key
    emailjs.init('oNEJMJLzZFrlag4-U');
  }, []);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_ae7t8h3', // ✅ Your new Gmail service ID
        'template_ncopci9',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'oNEJMJLzZFrlag4-U' // ✅ Your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Something went wrong:', err?.text || err);
      toast.error(`Failed to send message. ${err?.text || ''}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={contactRef}
      className={`mx-auto my-10 px-8 py-10 rounded-xl shadow-2xl max-w-md w-[90vw] border backdrop-blur-lg transition duration-500 ${
        isDark
          ? 'bg-white/10 border-white/20 text-white'
          : 'bg-white text-slate-800 border-slate-300'
      }`}
    >
      <div className="flex justify-end mb-4">
        <button
          onClick={handleThemeToggle}
          className="text-xl p-2 rounded-full hover:bg-white/20 transition"
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-center">Let's Talk</h2>
        <p className="text-center text-sm">
          Whether you're looking to build interactive and trending sites with modern features, I'm here to help!
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
        <div
          className={`flex items-center rounded-md px-3 py-2 border focus-within:ring-2 focus-within:ring-blue-400 ${
            isDark
              ? 'bg-white/10 border-white/30 text-white placeholder-white/70'
              : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
          }`}
        >
          <FiUser className="mr-2" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="bg-transparent w-full outline-none"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div
          className={`flex items-center rounded-md px-3 py-2 border focus-within:ring-2 focus-within:ring-blue-400 ${
            isDark
              ? 'bg-white/10 border-white/30 text-white placeholder-white/70'
              : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
          }`}
        >
          <FiMail className="mr-2" />
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="bg-transparent w-full outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div
          className={`flex items-start rounded-md px-3 py-2 border focus-within:ring-2 focus-within:ring-blue-400 ${
            isDark
              ? 'bg-white/10 border-white/30 text-white placeholder-white/70'
              : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500'
          }`}
        >
          <FiMessageCircle className="mr-2 mt-1" />
          <textarea
            name="message"
            placeholder="Type your message..."
            rows="4"
            required
            className="bg-transparent w-full outline-none resize-none"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-2 rounded-md mt-2"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
