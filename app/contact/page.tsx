'use client';
import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { MapPin, Mail, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';

type FormState = { name: string; email: string; phone: string; message: string };
type Errors = Partial<FormState>;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Name is required';
  if (!f.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email';
  if (!f.message.trim()) e.message = 'Message is required';
  return e;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-brand-dark placeholder-slate-400 bg-brand-bg outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${errors[field] ? 'border-red-400' : 'border-slate-200 hover:border-slate-300'
    }`;

  return (
    <>
      {/* Hero */}
      <section className="relative py-42 mt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1a3a5c] to-brand-dark -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6">
              Get In Touch
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
              Have questions or ready to start? Reach out and our team will respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Body */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: Info */}
            <AnimatedSection className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-brand-dark mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Office Address', value: 'KP Nagar, Peringome PO 670307, Kannur Dist, Kerala, INDIA' },
                  { icon: Mail, label: 'Email Address', value: 'canalfinsolutions.com', href: 'mailto:info@canalfinsolutions.com' },
                  { icon: Phone, label: 'Phone Number', value: '+91-9400363132', href: '+91-9400363132' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-brand-bg rounded-2xl border border-slate-100 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-brand-dark font-medium text-sm hover:text-brand-blue transition-colors">{value}</a>
                      ) : (
                        <p className="text-brand-dark font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-brand-dark to-[#1a3a5c]">
                <h3 className="font-heading font-semibold text-white mb-2">Business Hours</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-brand-blue font-medium">9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-brand-blue font-medium">10:00 AM – 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-slate-500">Closed</span></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={150} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl">
                <h2 className="font-heading text-2xl font-bold text-brand-dark mb-2">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                {success ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">Message Received!</h3>
                    <p className="text-slate-500 text-sm max-w-xs">
                      Thank you for reaching out. We will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-6 px-5 py-2.5 rounded-xl bg-brand-blue/10 text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {serverError && (
                      <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{serverError}</div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2" htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} className={inputClass('name')} />
                        {errors.name && <p className="mt-1.5 text-red-500 text-xs">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2" htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} className={inputClass('email')} />
                        {errors.email && <p className="mt-1.5 text-red-500 text-xs">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2" htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+92 300 000 0000" value={form.phone} onChange={handleChange} className={inputClass('phone')} />
                    </div>
                    <div className="mb-8">
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2" htmlFor="message">Message *</label>
                      <textarea id="message" name="message" rows={5} placeholder="Tell us about your business and how we can help..." value={form.message} onChange={handleChange} className={`${inputClass('message')} resize-none`} />
                      {errors.message && <p className="mt-1.5 text-red-500 text-xs">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-[#1a8fb5] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.01] btn-glow transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
