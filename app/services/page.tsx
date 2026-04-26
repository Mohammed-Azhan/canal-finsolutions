import AnimatedSection from '@/components/AnimatedSection';
import {
  Share2, FileText, Settings2, Search, UserCheck,
  Tag, Palette, Compass, Rocket, MessageSquare, ShieldCheck, ClipboardList,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const serviceCategories = [
  /* ─── Digital Marketing Services ─── */
  {
    groupLabel: 'Digital Marketing Services',
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engaging audiences across social platforms with creative, data-driven campaigns that grow your community, elevate brand awareness, and turn followers into loyal customers.',
    points: [
      'Platform strategy across Instagram, LinkedIn, Facebook, TikTok & more',
      'Content calendar planning and scheduling',
      'Community management and audience engagement',
      'Paid social advertising and retargeting',
      'Analytics reporting and performance optimization',
    ],
    accent: 'from-brand-blue to-[#1a8fb5]',
    bg: 'bg-white',
  },
  {
    groupLabel: 'Digital Marketing Services',
    icon: FileText,
    title: 'Content Marketing',
    description: 'Creating valuable, compelling content to attract and retain customers — from long-form articles and videos to infographics and email campaigns that nurture your audience through every stage of the funnel.',
    points: [
      'Blog posts, articles, and thought-leadership pieces',
      'Video scripts and short-form content creation',
      'Email marketing campaigns and drip sequences',
      'Infographics and visual storytelling',
      'Content strategy aligned with SEO and brand voice',
    ],
    accent: 'from-brand-dark to-[#1a3a5c]',
    bg: 'bg-brand-bg',
  },
  {
    groupLabel: 'Digital Marketing Services',
    icon: Settings2,
    title: 'Campaign Management',
    description: 'Overseeing and optimizing marketing campaigns end-to-end — ensuring every dollar works harder through meticulous planning, real-time monitoring, and continuous A/B testing.',
    points: [
      'End-to-end campaign planning and execution',
      'Multi-channel campaign coordination',
      'Budget allocation and bid management',
      'A/B testing and conversion rate optimization',
      'Detailed performance reporting and ROI analysis',
    ],
    accent: 'from-brand-blue to-[#1a8fb5]',
    bg: 'bg-white',
  },
  {
    groupLabel: 'Digital Marketing Services',
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Improving your visibility in search engine results through technical SEO, strategic keyword planning, authoritative link building, and on-page optimization that drives sustainable organic traffic.',
    points: [
      'Technical SEO audits and site health fixes',
      'Keyword research and competitive gap analysis',
      'On-page optimization (meta, headings, structured data)',
      'Link building and digital PR outreach',
      'Local SEO and Google Business Profile management',
    ],
    accent: 'from-brand-dark to-[#1a3a5c]',
    bg: 'bg-brand-bg',
  },
  {
    groupLabel: 'Digital Marketing Services',
    icon: UserCheck,
    title: 'Influencer Marketing',
    description: 'Collaborating with the right influencers to authentically promote your brand, expand your reach into new audiences, and drive measurable conversions through trusted voices.',
    points: [
      'Influencer identification and vetting',
      'Campaign brief development and negotiation',
      'Content review and brand alignment checks',
      'Performance tracking (reach, engagement, conversions)',
      'Long-term influencer relationship management',
    ],
    accent: 'from-brand-blue to-[#1a8fb5]',
    bg: 'bg-white',
  },

  /* ─── Branding Services ─── */
  {
    groupLabel: 'Branding Services',
    icon: Tag,
    title: 'Brand Name',
    description: 'Crafting unique and memorable brand names that resonate with your target audience, reflect your values, and stand out in a competitive marketplace.',
    points: [
      'Market and competitor naming research',
      'Creative brainstorming and name generation',
      'Trademark and domain availability checks',
      'Cultural and linguistic viability review',
      'Final name shortlisting with strategic rationale',
    ],
    accent: 'from-brand-dark to-[#1a3a5c]',
    bg: 'bg-brand-bg',
  },
  {
    groupLabel: 'Branding Services',
    icon: Palette,
    title: 'Brand Visual Identity',
    description: 'Designing cohesive visual elements for your brand — from logo and color palette to typography and iconography — that create an instantly recognizable and emotionally compelling presence.',
    points: [
      'Logo design and variations (primary, secondary, icon)',
      'Color palette and typography system',
      'Brand style guide and usage documentation',
      'Stationery, packaging, and collateral design',
      'Digital asset creation for web and social',
    ],
    accent: 'from-brand-blue to-[#1a8fb5]',
    bg: 'bg-white',
  },
  {
    groupLabel: 'Branding Services',
    icon: Compass,
    title: 'Brand Strategy',
    description: 'Developing a comprehensive brand positioning and direction that defines who you are, who you serve, and why you matter — forming the strategic foundation for all brand decisions.',
    points: [
      'Brand vision, mission, and values articulation',
      'Target audience personas and market positioning',
      'Competitive differentiation and unique value proposition',
      'Brand architecture for multi-product businesses',
      'Long-term brand roadmap development',
    ],
    accent: 'from-brand-dark to-[#1a3a5c]',
    bg: 'bg-brand-bg',
  },
  {
    groupLabel: 'Branding Services',
    icon: Rocket,
    title: 'Brand Launch',
    description: 'Orchestrating impactful brand introductions to the market with a strategic launch plan that maximizes awareness, generates buzz, and sets your brand up for sustained growth.',
    points: [
      'Pre-launch hype and teaser campaign planning',
      'Launch day multichannel activation strategy',
      'Press release and media outreach coordination',
      'Social media launch campaign execution',
      'Post-launch performance review and refinement',
    ],
    accent: 'from-brand-blue to-[#1a8fb5]',
    bg: 'bg-white',
  },
  {
    groupLabel: 'Branding Services',
    icon: MessageSquare,
    title: 'Brand Communication',
    description: 'Creating consistent and effective brand messaging across every touchpoint — ensuring your tone of voice, key messages, and storytelling are aligned to build trust and recognition.',
    points: [
      'Brand voice and tone of voice guidelines',
      'Core messaging framework and tagline development',
      'Internal and external communication templates',
      'Crisis communication and reputation management',
      'Multichannel messaging consistency audits',
    ],
    accent: 'from-brand-dark to-[#1a3a5c]',
    bg: 'bg-brand-bg',
  },
  {
    groupLabel: 'Branding Services',
    icon: ShieldCheck,
    title: 'Brand Management',
    description: 'Ongoing stewardship and evolution of your brand — protecting its integrity, adapting to market shifts, and ensuring every team member and partner represents your brand correctly.',
    points: [
      'Brand compliance monitoring across channels',
      'Asset management and brand portal setup',
      'Brand evolution and refresh planning',
      'Partner and franchise brand governance',
      'Quarterly brand health reporting',
    ],
    accent: 'from-brand-blue to-[#1a8fb5]',
    bg: 'bg-white',
  },
  {
    groupLabel: 'Branding Services',
    icon: ClipboardList,
    title: 'Brand Audit',
    description: 'Comprehensive analysis and evaluation of your brand — uncovering gaps, inconsistencies, and opportunities so you can realign your brand with your business goals and audience expectations.',
    points: [
      'Visual identity consistency review',
      'Brand perception surveys and stakeholder interviews',
      'Competitor brand benchmarking',
      'Digital presence and SEO brand analysis',
      'Detailed audit report with actionable recommendations',
    ],
    accent: 'from-brand-dark to-[#1a3a5c]',
    bg: 'bg-brand-bg',
  },
];

/* Group consecutive items that share the same groupLabel */
const grouped: { label: string; items: typeof serviceCategories }[] = [];
for (const svc of serviceCategories) {
  const last = grouped[grouped.length - 1];
  if (last && last.label === svc.groupLabel) {
    last.items.push(svc);
  } else {
    grouped.push({ label: svc.groupLabel, items: [svc] });
  }
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-42 mt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1a3a5c] to-brand-dark -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Marketing &amp; Branding
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              From social media campaigns and SEO to brand strategy and visual identity — we provide end-to-end digital marketing and branding solutions that grow your business and build lasting brand equity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Groups */}
      {grouped.map(({ label, items }) => (
        <div key={label}>
          {/* Group Header */}
          <div className="bg-gradient-to-r from-brand-bg to-white py-12">
            <div className="max-w-7xl mx-auto px-6">
              <AnimatedSection className="text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
                  {label}
                </span>
                <div className="h-0.5 w-16 bg-gradient-to-r from-brand-blue to-[#1a8fb5] mx-auto rounded-full mt-3" />
              </AnimatedSection>
            </div>
          </div>

          {/* Individual Services */}
          {items.map(({ icon: Icon, title, description, points, accent, bg }, i) => (
            <section key={title} className={`py-24 ${bg}`}>
              <div className="max-w-7xl mx-auto px-6">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                  <AnimatedSection className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5 leading-tight">{title}</h2>
                    <p className="text-slate-500 leading-relaxed mb-8 text-base">{description}</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-[#1a8fb5] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-md">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </AnimatedSection>

                  <AnimatedSection delay={150} className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
                      <h4 className="font-heading font-semibold text-brand-dark text-sm uppercase tracking-widest mb-6 text-brand-blue">
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-4">
                        {points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
              {i < items.length - 1 && <div className="section-divider max-w-7xl mx-auto mt-24" />}
            </section>
          ))}
        </div>
      ))}

      {/* CTA */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-4xl font-bold text-brand-dark mb-5">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto mb-10">
              Talk to one of our specialists today and discover which services are the right fit for your business goals.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-dark to-[#1a3a5c] text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Book a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
