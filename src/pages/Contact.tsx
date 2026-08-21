import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
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
    <div className="pb-20 space-y-12">
      {/* Header Banner */}
      <div className="bg-[#08203E] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Contact Us
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Have questions about our rural health activities? Get in touch with us using our phone, email, or contact form.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 text-left">
          {/* Phone Card */}
          <a
            href="tel:+919002781727"
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center space-x-4 hover:border-emerald-200 transition-colors"
          >
            <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</span>
              <span className="text-sm font-extrabold text-[#08203E]">+91 9002781727</span>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:ishaanfoundation01@gmail.com"
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center space-x-4 hover:border-emerald-200 transition-colors break-all"
          >
            <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email</span>
              <span className="text-sm font-extrabold text-[#08203E] break-all">ishaanfoundation01@gmail.com</span>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/919002781727"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center space-x-4 hover:border-emerald-200 transition-colors"
          >
            <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
              <span className="text-sm font-extrabold text-[#08203E]">Chat on WhatsApp</span>
            </div>
          </a>
        </div>

        {/* Detailed Info / Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#08203E] text-white rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <h3 className="font-heading font-extrabold text-xl">ISHAAN FOUNDATION</h3>
              
              <ul className="space-y-6 text-sm">
                <li className="flex items-start space-x-3.5">
                  <MapPin className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="block font-bold text-slate-200">Our Location</span>
                    <span className="text-slate-400">
                      Surya Nagar, Rabindra Sarani,
                      Jalpaiguri, West Bengal, India
                    </span>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3.5">
                  <Phone className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="block font-bold text-slate-200">Office Hours</span>
                    <span className="text-slate-400">
                      Mon - Sat: 10:00 AM - 05:00 PM
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Static Map Visual */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-600">Jalpaiguri District Map</span>
                <span className="text-emerald-600 uppercase tracking-wider text-[10px]">Location Pin</span>
              </div>
              
              <div className="h-44 bg-gradient-to-tr from-slate-100 to-slate-200 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-slate-200">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-60" />
                <div className="absolute w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center animate-pulse z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                </div>
                <div className="z-10 mt-12 bg-white/90 border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm text-[10px] font-bold text-[#08203E] text-center">
                  Surya Nagar, Rabindra Sarani
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
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
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-primary-500/10 hover:shadow-primary-600/20 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Send via Email Client</span>
                <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              
              <p className="text-[10px] text-slate-400 text-center leading-normal">
                * Note: Since this is a static website, clicking "Send" will launch your device's default email app (like Outlook or Gmail) with a pre-filled draft containing your response.
              </p>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
