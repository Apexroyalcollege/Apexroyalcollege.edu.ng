import ContentPage from "@/components/ContentPage";
export default function Page() {
  return <ContentPage eyebrow="RESOURCES" title="Knowledge & Resources" intro="A growing institutional knowledge environment supporting students, staff, researchers, families and the wider community." items={[
    {title:"Abstracts",text:"Institutional academic abstracts and scholarly summaries.",href:"/resources/abstracts"},
    {title:"Journals",text:"Academic publications and journal resources.",href:"/resources/journals"},
    {title:"Institutional Repository",text:"A structured digital archive for approved institutional knowledge and publications.",href:"/resources/repository"},
    {title:"Staff Profiles",text:"Public academic and professional profiles of ARC staff.",href:"/resources/staff-profiles"},
    {title:"Registry Staff Updates",text:"Official public notices and updates from the Registry."},
    {title:"Inaugural Lectures",text:"Lectures and scholarly presentations from the institution.",href:"/resources/lectures"},
    {title:"Library",text:"Information about ARC library services and learning resources.",href:"/resources/library"},
    {title:"Faculty & Department Resources",text:"Academic resources organized around subject and department needs."},
    {title:"Staff Email",text:"Institutional communication information for authorized ARC staff."},
    {title:"Publications",text:"Approved ARC publications and institutional materials.",href:"/resources/publications"},
    {title:"Downloads",text:"Forms, documents, guides and official resources.",href:"/resources/downloads"},
  ]}/>;
}
