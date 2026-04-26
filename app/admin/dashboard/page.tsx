'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  TrendingUp, LogOut, Trash2, Mail, Phone, User, MessageSquare,
  Calendar, RefreshCw, Loader2, AlertTriangle, Users
} from 'lucide-react';
import type { Contact } from '@/lib/supabase';

export default function AdminDashboardPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const router = useRouter();

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/contacts');
      if (res.status === 401) { router.push('/admin/login'); return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setContacts(data.contacts || []);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to load contacts.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => { fetchContacts(); }, [fetchContacts]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;
    setDeletingId(id);
    try {
      const res = await fetch('/api/admin/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error('Delete failed');
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch {
      alert('Failed to delete. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' }).catch(() => {});
    document.cookie = 'admin_session=; Max-Age=0; path=/';
    router.push('/admin/login');
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-brand-dark text-base">Canal FinSolutions</span>
              <span className="ml-2 text-xs text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-full">Admin</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchContacts}
              className="p-2 rounded-lg text-slate-500 hover:text-brand-blue hover:bg-brand-blue/10 transition-all duration-200"
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            { icon: Users, label: 'Total Contacts', value: contacts.length, color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
            { icon: Calendar, label: 'This Month', value: contacts.filter(c => new Date(c.created_at).getMonth() === new Date().getMonth()).length, color: 'text-green-600', bg: 'bg-green-100' },
            { icon: Mail, label: 'Unread', value: contacts.length, color: 'text-purple-600', bg: 'bg-purple-100' },
          ].map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-brand-dark">{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-bold text-xl text-brand-dark">Contact Submissions</h2>
          <span className="text-sm text-slate-400">{contacts.length} entries</span>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-brand-blue animate-spin" />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center py-24 text-center">
            <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
            <p className="text-slate-600 font-medium">{error}</p>
            <button onClick={fetchContacts} className="mt-4 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-[#1a8fb5] transition-all">Retry</button>
          </div>
        ) : contacts.length === 0 ? (
          <div className="flex flex-col items-center py-24 text-center">
            <MessageSquare className="w-10 h-10 text-slate-300 mb-4" />
            <p className="text-slate-400">No contact submissions yet.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-bg border-b border-slate-100">
                    {['Name', 'Email', 'Phone', 'Message', 'Date', 'Action'].map((h) => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {contacts.map((c) => (
                    <tr key={c.id} className="hover:bg-brand-bg/50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-brand-blue" />
                          </div>
                          <span className="font-medium text-brand-dark text-sm">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600">{c.email}</td>
                      <td className="px-5 py-4 text-sm text-slate-600">{c.phone || '—'}</td>
                      <td className="px-5 py-4 text-sm text-slate-600 max-w-xs">
                        <span className="line-clamp-2">{c.message}</span>
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-400 whitespace-nowrap">{formatDate(c.created_at)}</td>
                      <td className="px-5 py-4">
                        <button
                          onClick={() => handleDelete(c.id)}
                          disabled={deletingId === c.id}
                          className="p-2 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200 disabled:opacity-50"
                          title="Delete contact"
                        >
                          {deletingId === c.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {contacts.map((c) => (
                <div key={c.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-semibold text-brand-dark">{c.name}</div>
                      <div className="text-xs text-slate-400 mt-1">{formatDate(c.created_at)}</div>
                    </div>
                    <button onClick={() => handleDelete(c.id)} disabled={deletingId === c.id} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                      {deletingId === c.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600"><Mail className="w-4 h-4 text-brand-blue" />{c.email}</div>
                    {c.phone && <div className="flex items-center gap-2 text-slate-600"><Phone className="w-4 h-4 text-brand-blue" />{c.phone}</div>}
                    <div className="flex items-start gap-2 text-slate-600"><MessageSquare className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />{c.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
