'use client';
import { BarChart3, Users, TrendingUp, BookOpen, Layers, ArrowRight, Share2, FileText, Settings2, Search, UserCheck, type LucideProps } from 'lucide-react';
import { type FC } from 'react';

const iconMap: Record<string, FC<LucideProps>> = {
  BarChart3, Users, TrendingUp, BookOpen, Layers,
  Share2, FileText, Settings2, Search, UserCheck,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
}

export default function ServiceCard({ iconName, title, description }: ServiceCardProps) {
  const Icon = iconMap[iconName] || BarChart3;
  return (
    <div className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm card-hover cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 flex items-center justify-center mb-5 group-hover:from-brand-blue group-hover:to-[#1a8fb5] transition-all duration-300">
        <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2 group-hover:text-brand-blue transition-colors duration-200">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
      <div className="flex items-center gap-1.5 text-brand-blue text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}
