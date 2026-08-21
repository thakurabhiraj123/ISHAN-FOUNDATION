import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Contact Inquiry - ISHAAN FOUNDATION`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );
    
    window.location.href = `mailto:ishaanfoundation01@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Contact Us
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Reach out to ISHAAN FOUNDATION directly for queries, volunteer opportunities, and medical camp collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left overflow-hidden">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-[#08203E] text-white rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-lg border border-white/5 group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl animate-pulse-slow" />
              
              <h3 className="font-heading font-extrabold text-xl group-hover:text-emerald-400 transition-colors">ISHAAN FOUNDATION</h3>
              
              <ul className="space-y-6 text-sm">
                <li className="flex items-start space-x-3.5 group/item">
                  <MapPin className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div className="space-y-1">
                    <span className="block font-bold text-slate-200">Our Address</span>
                    <span className="text-slate-400 leading-relaxed text-xs font-medium">
                      Surya Nagar, Rabindra Sarani,
                      Jalpaiguri, West Bengal, India
                    </span>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3.5 group/item">
                  <Phone className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div className="space-y-1">
                    <span className="block font-bold text-slate-200">Phone Support</span>
                    <a href="tel:+919002781727" className="text-emerald-300 hover:underline font-bold">
                      +91 9002781727
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5 group/item">
                  <Mail className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div className="space-y-1">
                    <span className="block font-bold text-slate-200">Email Address</span>
                    <a href="mailto:ishaanfoundation01@gmail.com" className="text-emerald-300 hover:underline break-all font-semibold">
                      ishaanfoundation01@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Static Map Placeholder Visual */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-600">Jalpaiguri District Map</span>
                <span className="text-emerald-600 uppercase tracking-wider text-[10px]">Location Pin</span>
              </div>
              
              <div className="h-44 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-slate-800 shadow-inner group cursor-default">
                {/* Glowing decorative rings representing location coverage */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-emerald-500/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-emerald-500/20 rounded-full animate-pulse-slow" />
                
                {/* Operational pathways/grids vector */}
                <svg className="absolute inset-0 w-full h-full text-slate-850 opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                </svg>

                <div className="absolute w-8 h-8 rounded-full bg-emerald-500/25 border-2 border-emerald-500 flex items-center justify-center animate-pulse z-10 shadow-lg shadow-emerald-500/30">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-heartbeat" />
                </div>
                <div className="z-10 mt-16 bg-slate-900/90 border border-slate-700/50 px-3.5 py-1.5 rounded-xl shadow-md text-[9px] font-bold text-emerald-400 tracking-wider text-center uppercase backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  Surya Nagar, Rabindra Sarani
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
          >
            <h3 className="font-heading font-extrabold text-xl text-[#08203E] mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-bold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                  placeholder="Enter email address"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-slate-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all resize-none"
                  placeholder="Write details about your query..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary-500/15 hover:shadow-primary-600/25 transition-all duration-200 flex items-center justify-center space-x-2 group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Send via Email Client</span>
                <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              
              <p className="text-[10px] text-slate-400 text-center leading-normal">
                * Note: Since this is a static website, clicking "Send" will launch your device's default email app (like Outlook or Gmail) with a pre-filled draft containing your response.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
