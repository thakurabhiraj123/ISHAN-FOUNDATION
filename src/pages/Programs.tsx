import Programs from '../sections/Programs';
import Activities from '../sections/Activities';
import Awards from '../sections/Awards';
import TrustCredentials from '../sections/TrustCredentials';
import Technology from '../sections/Technology';

export default function ProgramsPage() {
  return (
    <div className="pb-16">
      {/* Header Banner */}
      <div className="bg-[#08203E] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Community Programs & Timeline
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Review our active campaigns, our verified chronological operational timeline, and the tools we use in the field.
          </p>
        </div>
      </div>

      {/* Programs Cards Section */}
      <Programs />

      {/* Activities Timeline Section */}
      <Activities />

      {/* Awards & Recognition Section */}
      <Awards />

      {/* Trust & Credentials Section */}
      <TrustCredentials />

      {/* Technology & Equipment Section */}
      <Technology />
    </div>
  );
}
