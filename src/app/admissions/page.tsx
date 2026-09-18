import ContentPage from "@/components/ContentPage";
export default function Page() {
  return <ContentPage eyebrow="ADMISSIONS" title="Join ARC" intro="Explore the pathway from enquiry to application, assessment and admission." items={[
    {title:"Why Choose ARC",text:"Discover the academic, technological, leadership and student-development experience that distinguishes ARC.",href:"/admissions/why-arc"},
    {title:"Admission Policy",text:"Understand ARC's principles for admission, fairness, documentation, assessment and placement.",href:"/admissions/policy"},
    {title:"Admission Requirements",text:"Review requirements for the relevant academic division and entry level.",href:"/admissions/requirements"},
    {title:"Apply to ARC",text:"Enter the ARC application experience.",href:"/apply"},
    {title:"Day-Schooling Application",text:"Apply for day-school admission where applications are open.",href:"/apply/day-school"},
    {title:"Boarding-School Application",text:"Boarding is available for Apex Royal Cadet and the Institute of Excellence.",href:"/apply/boarding"},
    {title:"ARET Admission Screening",text:"Information about the Apex Royal Entrance Test and admission screening exercise.",href:"/admissions/aret"},
    {title:"Application Guidelines",text:"Step-by-step guidance for applicants before beginning an application."},
    {title:"Application Timeline",text:"Opening dates, deadlines, screening periods and important admission milestones."},
    {title:"Check Application Status",text:"Applicants can securely check application progress through the application portal.",href:"/admissions/status"},
    {title:"Admission Updates",text:"Official admission notices and updates published by ARC."},
    {title:"FAQ",text:"Answers to common admission questions."},
  ]}/>;
}
