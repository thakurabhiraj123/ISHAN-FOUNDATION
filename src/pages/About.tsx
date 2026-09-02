import { HeartPulse, CheckCircle } from 'lucide-react';
import VisionMission from '../sections/VisionMission';
import Founder from '../sections/Founder';
import Beneficiaries from '../sections/Beneficiaries';

export default function AboutPage() {
  const objectives = [
    'Deliver accessible health screenings, medical consultations, and first-aid kits.',
    'Rescue injured stray animals, host stray vaccinations, and support shelters.',
    'Provide tailoring, handcraft, and digital courses to empower rural women.',
    'Train local youth in eco-tourism, community homestays, and hospitality skills.',
  ];

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="bg-[#08203E] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            About ISHAAN FOUNDATION
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            A committed NGO based in Siliguri, Jalpaiguri, West Bengal, India, focused on rural healthcare, street animal welfare, women's empowerment, and eco-tourism.
          </p>
        </div>
      </div>

      {/* Main Core Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#08203E]">
              Dedicated to Healthcare, Animal Welfare, Women, & Sustainable Travel
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded under the leadership of Arijit Sikdar, ISHAAN FOUNDATION acts as a local support channel for families, plantation laborers, and tea garden workers in Siliguri, Jalpaiguri, West Bengal, India. Our operations are centered on Surya Nagar, Rabindra Sarani, where we organize local medical checkups, stray animal rescue drives, tailoring training for women, and eco-tourism hospitality courses.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We focus on solving the root causes of rural stagnation in Bengal, specifically healthcare disparities, street animal neglect, lack of female vocational training, and underutilized eco-tourism opportunities.
            </p>
            <div className="space-y-3 pt-2">
              <h3 className="font-heading font-bold text-sm text-[#08203E]">NGO Objectives:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {objectives.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 to-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between h-80">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl" />
            <div className="flex items-center space-x-2 z-10">
              <HeartPulse className="h-7 w-7 text-emerald-400" />
              <span className="font-heading font-bold text-sm tracking-wider text-slate-200">ISHAAN FOUNDATION</span>
            </div>
            <div className="z-10 space-y-2">
              <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Siliguri, Jalpaiguri HQ</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our team is made of community volunteers, animal welfare activists, youth coordinators, and social workers dedicated to rural healthcare, stray animal rescue, women's self-reliance, and sustainable travel.
              </p>
            </div>
            <div className="border-t border-slate-800 pt-4 text-[10px] text-slate-500 z-10">
              <a
                href="https://maps.app.goo.gl/YxGwCGSSYg2NkMiNA?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                Surya Nagar, Rabindra Sarani, Siliguri, Jalpaiguri, West Bengal, India
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Sections */}
      <VisionMission />

      {/* Beneficiaries Section */}
      <Beneficiaries />

      {/* Founder Section */}
      <Founder />
    </div>
  );
}
