import {
  CppIcon,
  ExpressIcon,
  JavascriptIcon,
  MongoIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  CssIcon,
  TailwindIcon,
  TypescriptIcon,
  FirebaseIcon,
  GitIcon,
  PythonIcon,
  AuthIcon,
  HtmlIcon,
  NpmIcon,
  ReduxIcon,
  NodeIcon,
  RedisIcon,
} from "../icons";

export type SkillProps = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export const LANGUAGES: SkillProps[] = [
  {
    name: "Javascript",
    icon: <JavascriptIcon />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    icon: <PythonIcon />,
    link: "https://www.python.org/",
  },
  {
    name: "C++",
    icon: <CppIcon />,
    link: "https://cplusplus.com/",
  },
];

export const FRAMEWORKS: SkillProps[] = [
  {
    name: "React.js",
    icon: <ReactIcon />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <NextIcon />,
    link: "https://nextjs.org/",
  },
  {
    name: "Auth.js",
    icon: <AuthIcon />,
    link: "https://authjs.dev/",
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    link: "https://nodejs.org/en",
  },
  {
    name: "Express",
    icon: <ExpressIcon />,
    link: "https://expressjs.com/",
  },
  {
    name: "Redux",
    icon: <ReduxIcon />,
    link: "https://redux.js.org/",
  },
  {
    name: "Tailwindcss",
    icon: <TailwindIcon />,
    link: "https://tailwindcss.com/",
  },
];

export const DATABASES: SkillProps[] = [
  {
    name: "Postgres",
    icon: <PostgresIcon />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Redis",
    icon: <RedisIcon />,
    link: "https://redis.io/",
  },
  {
    name: "MongoDB",
    icon: <MongoIcon />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Firebase",
    icon: <FirebaseIcon />,
    link: "https://firebase.google.com/",
  },
];

export const DEVOPS: SkillProps[] = [
  {
    name: "Git",
    icon: <GitIcon />,
    link: "https://git-scm.com/",
  },
  {
    name: "NPM",
    icon: <NpmIcon />,
    link: "https://www.npmjs.com/",
  },
];
