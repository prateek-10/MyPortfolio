export type JobProps = {
  id: string;
  name: string;
  url: string;
  logo: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const JOBS: JobProps[] = [
  {
    id: "InternCertify",
    name: "Intern Certify by The Website Makers",
    url: "https://thewebsitemakers.in/",
    logo: "/WebsiteMakerLogo.jpg",
    jobTitle: "Full Stack Developer Intern",
    startDate: "MAY 2024",
    endDate: "JUL 2025",
    description:
      "Prateek Kumar Nayak worked as a Developer Intern at The Website Makers, where he gained extensive knowledge in full stack development. He applied his skills to various personal and company projects, enhancing his practical experience. During his internship, he successfully contributed to the development and optimization of several web applications, showcasing his ability to deliver effective and efficient solutions.",
  },
];
