import React, { useState } from 'react';
import { Send, Users, ShieldAlert, Heart, Calendar, FileText } from 'lucide-react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: 'community-volunteer',
    availability: 'weekends',
    message: '',
  });

  const categories = [
    {
      id: 'community-volunteer',
      title: 'Community Volunteer',
      description: 'Engage with families directly, sharing healthcare resources and helping coordinate logistics at local camp structures.',
      icon: Users,
    },
    {
      id: 'event-volunteer',
      title: 'Event Volunteer',
      description: 'Help organize drawing events, youth engagement groups, and blood collection camps in the field.',
      icon: Calendar,
    },
    {
      id: 'awareness-volunteer',
      title: 'Awareness Volunteer',
      description: 'Assist in drafting, translating, and distributing educational leaflets regarding hygiene and preventative health.',
      icon: ShieldAlert,
    },
    {
      id: 'healthcare-support',
      title: 'Healthcare Support Volunteer',
      description: 'Perfect for local nursing students or clinical aides to assist visiting doctors during patient screenings.',
      icon: Heart,
    },
    {
      id: 'admin-volunteer',
      title: 'Administrative Volunteer',
      description: 'Assist with structured digital patient record maintenance and general reporting activities.',
      icon: FileText,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, location, interest, availability, message } = formData;

    const interestLabel = categories.find(cat => cat.id === interest)?.title || interest;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Volunteer Registration - ISHAAN FOUNDATION`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Location: ${location}\n` +
      `Area of Interest: ${interestLabel}\n` +
      `Availability: ${availability}\n\n` +
      `Message/Bio:\n${message}`
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
            Make an Impact
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Join Our Community
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Become a volunteer with ISHAAN FOUNDATION and work alongside us to deliver health accessibility to remote parts of Siliguri, Jalpaiguri, West Bengal, India.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Volunteer Categories */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-extrabold font-heading text-[#08203E] pb-3 border-b border-slate-100">
              Volunteer Categories
            </h2>

            <div className="space-y-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start space-x-3.5">
                    <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-sm text-[#08203E]">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-extrabold font-heading text-[#08203E] mb-6">
              Volunteer Application
            </h2>

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
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
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
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="location" className="text-xs font-bold text-slate-700">
                    Your Location (City/Village)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                    placeholder="Siliguri, Jalpaiguri, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="interest" className="text-xs font-bold text-slate-700">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all cursor-pointer"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="availability" className="text-xs font-bold text-slate-700">
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="weekends">Weekends Only</option>
                    <option value="weekdays">Weekdays Only</option>
                    <option value="flexible">Flexible / Any time</option>
                    <option value="specific-events">Specific Event camps only</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-slate-700">
                  Introduce Yourself & Why You Want to Join
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all resize-none"
                  placeholder="Introduce yourself and list any social service or healthcare background..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-[#08203E] font-bold py-3.5 px-6 rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-600/20 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Submit Application via Email</span>
                <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <p className="text-[10px] text-slate-400 text-center leading-normal">
                * Note: Submission is static. Clicking the button will launch your default email program to compose a registration message directly to the foundation director.
              </p>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
