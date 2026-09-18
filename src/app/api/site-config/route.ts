import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createSupabaseServerClient()

  const [
    website,
    admissionSessions,
    applicationWindows,
    announcements,
    managementInformation,
    news,
    events,
  ] = await Promise.all([
    supabase
      .from('arc_superadmin_website_controls')
      .select('*')
      .eq('website_key', 'arc')
      .maybeSingle(),

    supabase
      .from('arc_admission_sessions')
      .select('*')
      .order('application_start', { ascending: false })
      .limit(1)
      .maybeSingle(),

    supabase
      .from('arc_application_windows')
      .select('*')
      .order('opening_at', { ascending: false })
      .limit(10),

    supabase
      .from('arc_editorial_announcements')
      .select('*')
      .eq('is_public', true)
      .eq('status', 'published')
      .order('publish_at', { ascending: false })
      .limit(10),

    supabase
      .from('arc_management_information')
      .select('*')
      .eq('is_published', true)
      .order('display_order', { ascending: true }),

    supabase
      .schema('arc')
      .from('news')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(12),

    supabase
      .schema('arc')
      .from('events')
      .select('*')
      .eq('status', 'published')
      .order('start_at', { ascending: true })
      .limit(12),
  ])

  const errors = [
    website.error,
    admissionSessions.error,
    applicationWindows.error,
    announcements.error,
    managementInformation.error,
    news.error,
    events.error,
  ].filter(Boolean)

  if (errors.length) {
    console.error('ARC site configuration error:', errors)

    return NextResponse.json(
      {
        ok: false,
        error: 'Unable to load ARC website configuration.',
      },
      { status: 500 }
    )
  }

  return NextResponse.json({
    ok: true,
    data: {
      website: website.data,
      admissionSession: admissionSessions.data,
      applicationWindows: applicationWindows.data ?? [],
      announcements: announcements.data ?? [],
      managementInformation: managementInformation.data ?? [],
      news: news.data ?? [],
      events: events.data ?? [],
    },
  })
}
