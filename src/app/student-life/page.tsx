import ContentPage from "@/components/ContentPage";
export default function Page() {
  return <ContentPage eyebrow="STUDENT LIFE" title="Life Beyond the Classroom" intro="A student experience built around learning, belonging, wellbeing, leadership and opportunity." items={[
    {title:"Campus Life",text:"Explore the academic and social environment of ARC.",href:"/student-life/campus"},
    {title:"Hostel",text:"Residential information for eligible boarding students.",href:"/student-life/hostel"},
    {title:"Entrepreneurship",text:"Enterprise, creativity and practical problem-solving opportunities.",href:"/student-life/entrepreneurship"},
    {title:"Work & Study",text:"Information about structured work-and-study opportunities where applicable.",href:"/student-life/work-study"},
    {title:"Internet Services",text:"Digital connectivity and technology support.",href:"/student-life/internet"},
    {title:"Student Affairs",text:"Student welfare, engagement and support services.",href:"/student-life/student-affairs"},
    {title:"Examinations & Records",text:"Public information about ARC examinations and academic records through AREC.",href:"/arec"},
    {title:"Guidance & Counselling",text:"Guidance services supporting academic and personal development.",href:"/student-life/guidance"},
    {title:"Health Services",text:"Student health and wellbeing information.",href:"/student-life/health"},
    {title:"Abuse & Safeguarding Policy",text:"ARC's commitment to student safety, dignity and safeguarding.",href:"/student-life/safeguarding"},
  ]}/>;
}
