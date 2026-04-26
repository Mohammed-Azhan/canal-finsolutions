import Link from 'next/link';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-[#1a8fb5] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">
                Canal <span className="text-brand-blue">FinSolutions</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses with strategic financial clarity, CFO-level expertise, and growth-focused solutions.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {['in', 'tw', 'fb'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:scale-110 transition-all duration-200 text-xs font-bold uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-brand-blue mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 text-sm hover:text-white inline-flex items-center gap-1.5 transition-all duration-200 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue group-hover:scale-150 transition-transform"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-brand-blue mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span>KP Nagar, Peringome PO 670307, Kannur Dist, Kerala, INDIA</span>
              </li>
              <li>
                <a href="mailto:info@canalfinsolutions.com" className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                  canalfinsolutions@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+92300000000" className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                  +91-9400363132
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Canal FinSolutions. All rights reserved.</span>
          <span>Designed with precision &amp; purpose</span>
        </div>
      </div>
    </footer>
  );
}
