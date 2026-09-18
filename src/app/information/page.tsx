import ContentPage from "@/components/ContentPage";
export default function Page() {
  return <ContentPage eyebrow="INFORMATION" title="Institutional Information" intro="Policies, public information, partnerships and resources that support transparency and engagement." items={[
    {title:"Alumni",text:"Stay connected with the ARC community beyond graduation.",href:"/information/alumni"},
    {title:"Policies",text:"Public institutional policies and governance documents.",href:"/information/policies"},
    {title:"Our Partners",text:"Institutional and strategic partnerships.",href:"/information/partners"},
    {title:"SERVICOM / Service Charter",text:"Service commitments and standards.",href:"/information/servicom"},
    {title:"Intellectual Property",text:"Information concerning institutional intellectual property.",href:"/information/intellectual-property"},
    {title:"Key Institutional Information",text:"Important public information about ARC.",href:"/information/institutional"},
    {title:"Privacy",text:"Privacy information and responsible data handling.",href:"/information/privacy"},
    {title:"Data Protection",text:"ARC's approach to responsible personal-data protection.",href:"/information/data-protection"},
    {title:"Accessibility",text:"Our commitment to accessible digital services.",href:"/information/accessibility"},
    {title:"Safeguarding",text:"Policies supporting the safety and welfare of learners."},
    {title:"FAQs",text:"Frequently asked institutional questions.",href:"/information/faq"},
    {title:"Downloads",text:"Official documents and forms.",href:"/resources/downloads"},
  ]}/>;
}
