import ContentPage from "@/components/ContentPage";
export default function Page() {
  return <ContentPage eyebrow="UPDATES" title="ARC Updates" intro="Official news, events, academic developments, scholarships and institutional announcements." items={[
    {title:"News",text:"Institutional news and major developments.",href:"/updates/news"},
    {title:"Events",text:"Academic, cultural, leadership and institutional events.",href:"/updates/events"},
    {title:"Research News",text:"Research activity, discoveries, publications and academic initiatives.",href:"/updates/research"},
    {title:"Scholarships",text:"Scholarship opportunities and funding announcements.",href:"/updates/scholarships"},
    {title:"Academic Updates",text:"Academic calendar, programmes and important notices."},
    {title:"Announcements",text:"Official ARC announcements and notices.",href:"/updates/announcements"},
    {title:"Student Achievements",text:"Recognizing student excellence and accomplishment.",href:"/updates/achievements"},
    {title:"Staff Achievements",text:"Recognizing academic and professional achievements."},
    {title:"Press Releases",text:"Official institutional communications and media statements."},
    {title:"Media Gallery",text:"Approved ARC photography and media."},
    {title:"ARC Magazine",text:"Institutional stories, features and community highlights."},
  ]}/>;
}
