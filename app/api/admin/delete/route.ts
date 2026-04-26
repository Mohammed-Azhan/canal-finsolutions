import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSupabase } from '@/lib/supabase';

export async function DELETE(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  if (!session?.value) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: 'Contact ID required.' }, { status: 400 });

  const supabase = getSupabase();
  const { error } = await supabase.from('contacts').delete().eq('id', id);
  if (error) return NextResponse.json({ error: 'Failed to delete contact.' }, { status: 500 });

  return NextResponse.json({ success: true });
}
