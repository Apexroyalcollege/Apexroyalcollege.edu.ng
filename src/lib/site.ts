export const site = {
  name: "APEX ROYAL COLLEGE",
  shortName: "ARC",
  location: "Benin City, Edo State, Nigeria",
  email: "info@arc.edu.ng",
  admissionsEmail: "admissions@arc.edu.ng",
  phone: "+234 000 000 0000",
  year: "2026",
};

export const mainNavigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Admissions", "/admissions"],
  ["Academics", "/academics"],
  ["Resources", "/resources"],
  ["Student Life", "/student-life"],
  ["Updates", "/updates"],
  ["Information", "/information"],
  ["Contact", "/contact"],
] as const;

export const divisions = [
  {
    title: "ROYAL NEWBIES",
    subtitle: "Early Years",
    description:
      "A nurturing foundation where curiosity, communication, confidence and early learning are developed through purposeful experiences.",
    href: "/academics/divisions#royal-newbies",
    boarding: "Day only",
  },
  {
    title: "APEX ROYAL TRAILBLAZER",
    subtitle: "Primary School",
    description:
      "A strong primary education designed to develop independent thinkers, confident communicators and responsible young learners.",
    href: "/academics/divisions#trailblazer",
    boarding: "Day only",
  },
  {
    title: "APEX ROYAL CADET",
    subtitle: "Junior Secondary",
    description:
      "A rigorous transition into secondary education combining academic development, technology, leadership and character.",
    href: "/academics/divisions#cadet",
    boarding: "Day + Boarding",
  },
  {
    title: "INSTITUTE OF EXCELLENCE",
    subtitle: "Senior Secondary",
    description:
      "ARC's advanced senior secondary environment preparing students for higher education, professional pathways and global opportunities.",
    href: "/academics/divisions#institute",
    boarding: "Day + Boarding",
  },
];

export const instituteSegments = [
  ["SCIENCE", "Mathematics, sciences, technology and scientific inquiry."],
  ["SOCIAL SCIENCE & BUSINESS", "Economics, business, society, enterprise and analytical thinking."],
  ["HUMANITIES", "Literature, languages, history, government, culture and human thought."],
];

export const footerGroups = [
  {
    title: "About ARC",
    links: [["About ARC", "/about"], ["History", "/about#history"], ["Leadership", "/about#leadership"], ["Governance", "/about#governance"]],
  },
  {
    title: "Admissions",
    links: [["Why Choose ARC", "/admissions/why-arc"], ["Apply", "/apply"], ["Requirements", "/admissions/requirements"], ["ARET", "/admissions/aret"]],
  },
  {
    title: "Academics",
    links: [["Divisions", "/academics/divisions"], ["Curriculum", "/academics/curriculum"], ["Records", "/academics/transcript"], ["Planning", "/academics/planning"]],
  },
  {
    title: "Resources",
    links: [["Library", "/resources/library"], ["Repository", "/resources/repository"], ["Journals", "/resources/journals"], ["Staff Profiles", "/resources/staff-profiles"]],
  },
  {
    title: "Student Life",
    links: [["Campus Life", "/student-life/campus"], ["Hostel", "/student-life/hostel"], ["Student Affairs", "/student-life/student-affairs"], ["Health", "/student-life/health"]],
  },
  {
    title: "Information",
    links: [["Policies", "/information/policies"], ["Alumni", "/information/alumni"], ["Partners", "/information/partners"], ["Contact", "/contact"]],
  },
];
