import Services from '../sections/Services';
import Challenges from '../sections/Challenges';
import Approach from '../sections/Approach';

export default function ServicesPage() {
  return (
    <div className="pb-16">
      {/* Header Banner */}
      <div className="bg-[#08203E] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Healthcare Services
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            From primary doctor checkups to vision correction and emergency transfers, explore how we serve regional health needs.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <Services />

      {/* Challenges Section */}
      <Challenges />

      {/* Approach Section */}
      <Approach />
    </div>
  );
}
