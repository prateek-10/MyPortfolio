export type EducationProps = {
  id: string;
  name: string;
  url: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string;
  gradeType?: "CGPA" | "Percentage";
  grade?: string;
};

export const EDUCATIONS: EducationProps[] = [
  {
    id: "NITR",
    name: "National Institute of Technology Rourkela",
    url: "https://nitrkl.ac.in/",
    logo: "/NITRLogo.png",
    startDate: "Nov 2021",
    endDate: "June 2025",
    description:
      "Currently pursuing my Bachelor of Technology (B.Tech) in Electrical Engineering at National Institute of Technology Rourkela, Odisha",
    gradeType: "CGPA",
    grade: "8.05",
  },
  {
    id: "DAV",
    name: "DAV Public School Pokhariput",
    url: "https://davpkt.org.in/",
    logo: "/DAVLogo.png",
    startDate: "May 2018",
    endDate: "May 2020",
    description:
      "I completed my Higher Secondary Education at DAV Public School, Pokhariput, Bhubaneswar, Odisha",
    gradeType: "Percentage",
    grade: "95.2%",
  },
  {
    id: "KVS",
    name: "Kendriya Vidyalaya No. 1 Bhubaneswar (2nd Shift)",
    url: "https://no1bhubaneswar.kvs.ac.in/",
    logo: "/KVSLogo.jpg",
    startDate: "2008",
    endDate: "2018",
    description:
      "I completed my Secondary Education at Kendriya Vidyalaya No. 1 Bhubaneswar (2nd Shift), Bhubaneswar, Odisha",
    gradeType: "Percentage",
    grade: "95.2%",
  },
];
