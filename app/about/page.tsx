import AnimatedSection from '@/components/AnimatedSection';
import { Eye, Lightbulb, Star, Users, Shield, TrendingUp, Heart, Award } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We uphold the highest ethical standards in every engagement.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Creative financial thinking to solve complex business challenges.' },
  { icon: Users, title: 'Partnership', desc: 'We treat every client as a long-term partner, not a transaction.' },
  { icon: TrendingUp, title: 'Excellence', desc: 'Relentless pursuit of quality in everything we deliver.' },
  { icon: Heart, title: 'Empathy', desc: 'We listen deeply before we advise — your goals are our priority.' },
  { icon: Award, title: 'Accountability', desc: 'We own our results and stand behind every recommendation.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-42 overflow-hidden mt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1a3a5c] to-brand-dark -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6">
              About Us
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Canal FinSolutions is a premier financial consulting firm committed to transforming how businesses manage, grow, and sustain their financial health.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-5">
                Our Story
              </span>
              <h2 className="font-heading text-4xl font-bold text-brand-dark mb-6 leading-tight">
                A Decade of Financial Expertise
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Founded with a vision to democratize access to high-quality financial consulting, Canal FinSolutions has grown into a trusted partner for businesses across industries. We combine the analytical rigor of a global firm with the personal touch of a boutique practice.
                </p>
                <p>
                  Our team of seasoned CFOs, accountants, and business strategists brings together decades of experience across manufacturing, retail, technology, healthcare, and services sectors. We don't just crunch numbers — we understand your business model, your market, and your ambitions.
                </p>
                <p>
                  Whether you're a startup seeking your financial footing or an established enterprise looking to optimize performance, Canal FinSolutions delivers tailored, impactful solutions that drive real results.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { num: '500+', label: 'Clients Served', sub: 'Across 10+ industries' },
                  { num: '15+', label: 'Years Experience', sub: 'Domain expertise' },
                  { num: '98%', label: 'Client Retention', sub: 'Long-term partnerships' },
                  { num: '50+', label: 'Expert Advisors', sub: 'Multidisciplinary team' },
                ].map(({ num, label, sub }) => (
                  <div key={label} className="bg-brand-bg rounded-2xl p-6 border border-slate-100 card-hover text-center">
                    <div className="font-heading font-bold text-3xl text-brand-blue mb-1">{num}</div>
                    <div className="font-semibold text-brand-dark text-sm mb-1">{label}</div>
                    <div className="text-slate-400 text-xs">{sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-brand-dark mb-4">Mission & Vision</h2>
            <p className="text-slate-500 max-w-xl mx-auto">The principles that guide every decision we make and every solution we deliver.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm card-hover h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-[#1a8fb5] flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-dark mb-4">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">
                  To be the most trusted financial partner for growing businesses — a firm where expertise meets empathy, and strategy meets execution. We envision a world where every business, regardless of size, has access to the financial intelligence it needs to thrive.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-brand-dark to-[#1a3a5c] rounded-3xl p-10 shadow-xl card-hover h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To empower businesses with precise financial insights, strategic CFO-level guidance, and integrated consulting solutions that fuel sustainable growth, operational efficiency, and long-term profitability. We are relentlessly committed to our clients' success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-4">
              What We Stand For
            </span>
            <h2 className="font-heading text-4xl font-bold text-brand-dark mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-xl mx-auto">These values aren't just words on a wall — they're the foundation of every client relationship and every solution we build.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="bg-brand-bg rounded-2xl p-7 border border-slate-100 card-hover">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
