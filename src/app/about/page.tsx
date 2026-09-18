import ContentPage from "@/components/ContentPage";
export default function Page() {
  return <ContentPage title="About ARC" intro="Learn about the institution, its history, leadership, governance and educational philosophy." items={[
    {title:"About ARC",text:"APEX ROYAL COLLEGE is conceived as a technology-driven K–16 institution combining rigorous education with character, leadership, innovation and future readiness."},
    {title:"History",text:"The history of ARC, its founding purpose, development and milestones will be maintained as a living institutional record.",href:"/about#history"},
    {title:"Principal's Office",text:"The office responsible for academic direction, institutional leadership and the continued advancement of the ARC vision."},
    {title:"Offices & Units",text:"Explore the institutional offices and operational units that support teaching, learning, student services and governance."},
    {title:"Principal Staff",text:"Institutional leadership and senior officers supporting the College's academic and administrative mission."},
    {title:"Members of Council",text:"The governing structure providing oversight, accountability, strategic direction and institutional stewardship."},
    {title:"Vision & Mission",text:"ARC's vision and mission establish the principles that guide education, innovation, character and service."},
    {title:"Core Values",text:"Excellence, integrity, responsibility, innovation, respect, leadership, service and continuous improvement."},
    {title:"Institutional Philosophy",text:"We believe education should develop the whole person: intellectually capable, technologically confident, ethically grounded and ready to contribute."},
    {title:"Leadership",text:"A leadership model built around academic quality, accountability, innovation and service."},
    {title:"Governance",text:"Clear governance, institutional responsibility and quality assurance form the foundation of ARC's operations."},
    {title:"Campuses",text:"ARC's campus environment is designed to support learning, collaboration, student life and digital education."},
  ]}/>;
}
