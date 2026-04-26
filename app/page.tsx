import Link from 'next/link';
import {
  ArrowRight, ChevronRight,
  Zap, Target, Shield, CheckCircle2,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';

/* ── Data ── */
const services = [
  { iconName: 'Share2',    title: 'Social Media Marketing',     description: 'Engaging audiences across social platforms with creative, targeted campaigns that build brand awareness and drive meaningful connections.' },
  { iconName: 'FileText',  title: 'Content Marketing',          description: 'Creating valuable content to attract and retain customers — from blog posts and videos to infographics and email newsletters.' },
  { iconName: 'Settings2', title: 'Campaign Management',        description: 'Overseeing and optimizing marketing campaigns end-to-end, ensuring maximum ROI through continuous performance tracking.' },
  { iconName: 'Search',    title: 'Search Engine Optimization', description: 'Improving your visibility in search results through technical SEO, keyword strategy, and authoritative link building.' },
  { iconName: 'UserCheck', title: 'Influencer Marketing',       description: 'Collaborating with the right influencers to authentically promote your brand, expand your reach, and drive conversions.' },
];

const whyUs = [
  { icon: Zap,          title: 'Data-Driven Decisions',    description: 'Every recommendation is backed by real analytics so you can invest with confidence.' },
  { icon: Target,       title: 'Growth-Focused Strategies', description: 'We design every campaign around one goal: sustainable, measurable growth.' },
  { icon: Shield,       title: 'Full-Service Agency',       description: 'From brand strategy to paid ads — everything under one roof.' },
  { icon: CheckCircle2, title: 'Trusted Expertise',         description: 'Years of cross-industry experience delivering results with transparency.' },
];

const stats = [
  { num: '200+', label: 'Brands Grown' },
  { num: '5M+',  label: 'Reach Generated' },
  { num: '98%',  label: 'Client Retention' },
  { num: '12+',  label: 'Years in Market' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#3BAFDA]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#0B1F3A]/3 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl animate-fade-up">
            {/* Badge */}
            <span className="badge mb-6 inline-block">
              Digital Marketing &amp; Branding Agency
            </span>

            {/* Headline */}
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] mb-6">
              We Build Brands{' '}
              <span className="gradient-text">People Remember.</span>
            </h1>

            {/* Sub */}
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
              Canal Finsolutions crafts bold digital marketing strategies and powerful brand identities — from social media to SEO, from brand naming to campaign management.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/contact" className="btn-primary">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-outline">
                Our Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-slate-100">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-heading font-bold text-2xl text-brand-dark">{num}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="badge mb-4 inline-block">What We Offer</span>
            <h2 className="font-heading text-4xl font-bold text-brand-dark mb-4">Our Core Services</h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
              End-to-end digital marketing and branding solutions designed to grow your audience and build lasting brand equity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 80}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10" delay={400}>
            <Link href="/services" className="btn-outline inline-flex">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ── WHY US ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <AnimatedSection>
              <span className="badge mb-4 inline-block">Why Canal Finsolutions</span>
              <h2 className="font-heading text-4xl font-bold text-brand-dark mb-5 leading-tight">
                Built Around Your{' '}
                <span className="gradient-text">Success</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We don&apos;t just run campaigns — we become your growth partner. Every strategy is custom-built around your brand&apos;s unique story, audience, and goals.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all duration-200">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Right grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map(({ icon: Icon, title, description }, i) => (
                <AnimatedSection key={title} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover">
                    <div className="w-10 h-10 rounded-xl bg-[#3BAFDA]/8 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="font-heading font-semibold text-brand-dark text-sm mb-1.5">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-brand-dark rounded-3xl px-10 py-16 md:px-20 text-center relative overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <span className="badge mb-5 inline-block" style={{ background: 'rgba(59,175,218,0.15)', color: '#3BAFDA' }}>
                  Ready to grow?
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                  Let&apos;s Build Something<br />
                  <span className="gradient-text">Extraordinary Together</span>
                </h2>
                <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
                  Whether you&apos;re launching a new brand or scaling an established one, our team is ready to craft the strategy that takes you further.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                  >
                    Our Services <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
