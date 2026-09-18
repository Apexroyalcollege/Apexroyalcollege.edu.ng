import ContentPage from "@/components/ContentPage";
export default function Page() {
  return <ContentPage eyebrow="ACADEMICS" title="Academic Excellence" intro="An integrated academic structure designed to develop knowledge, discipline, creativity and independent thinking." items={[
    {title:"Schools & Academic Divisions",text:"Explore Royal Newbies, Apex Royal Trailblazer, Apex Royal Cadet and the Institute of Excellence.",href:"/academics/divisions"},
    {title:"Academic Segments",text:"The Institute of Excellence is organized into Science, Social Science & Business, and Humanities.",href:"/academics/segments"},
    {title:"Curriculum",text:"A curriculum framework connecting Nigerian, British, American and internationally relevant learning objectives.",href:"/academics/curriculum"},
    {title:"Departments & Subject Areas",text:"Academic subject areas and departmental organization.",href:"/academics/departments"},
    {title:"Academic Planning",text:"Planning, timetabling, academic calendars and structured delivery.",href:"/academics/planning"},
    {title:"Centre for Online Learning",text:"Digital learning environments that extend education beyond conventional classroom boundaries.",href:"/academics/online-learning"},
    {title:"Assessment & Examination",text:"Assessment practices designed to measure understanding, progression and readiness."},
    {title:"Academic Records",text:"Secure academic records and student information processes."},
    {title:"Transcript Services",text:"Information about transcript requests and academic documentation.",href:"/academics/transcript"},
    {title:"Strategic Planning & Quality Assurance",text:"Continuous institutional improvement, quality assurance and strategic planning.",href:"/academics/quality-assurance"},
  ]}/>;
}
