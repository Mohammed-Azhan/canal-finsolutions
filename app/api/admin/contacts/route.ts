import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSupabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  if (!session?.value) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch contacts.' }, { status: 500 });
  }

  return NextResponse.json({ contacts: data });
}
