import { TimelineObject } from '../types/timeline';

export const EXPERIENCE: TimelineObject[] = [
  {
    title: 'Ideon Technologies',
    subTitle: 'Intermediate Software Developer',
    location: 'Richmond BC, Hybrid',
    timeRange: 'November 2022 - Current',
    image: 'ideon-logo.png',
    externalLink: 'https://ideon.ai/',
    content: {
      listItems: [
        "Developed full-stack features for Ideon's cloud platforms using Azure, Python, FastAPI, TypeScript, React, PostgreSQL, and MongoDB, and implemented RBAC authentication for secure access control.",
        'Served as ScrumMaster for a team of 10+ people, increasing task completion per sprint from 30% to 80% on average. Responsibilities included facilitating daily scrums, sprint planning, and retrospectives, as well as educating the team on Agile and Scrum methodologies.',
        "Designed and implemented the entry point to Ideon's data platform using an Azure Function triggered by blob storage uploads from deployed hardware devices. This function efficiently processes uploaded data, seamlessly integrating it into various databases for streamlined data management.",
        "Contributed to the development of a Full Stack control application using Python, TypeScript, and React, enabling  Ideon's deployment team to efficiently interact with hardware devices through a user-friendly interface in the field.",
        'Developed a robust data transfer protocol to reliably transmit collected data from remote deployments with poor connectivity to in-office servers at Ideon HQ.',
      ],
      skills: [
        'Docker',
        'TypeScript',
        'Jira',
        'Azure',
        'React.js',
        'Full-Stack Development',
        'PostgreSQL',
        'MongoDB',
        'Scrum',
        'Agile',
        'Python',
        'Linux',
        'GitHub',
        'Bash',
      ],
    },
  },
  {
    title: 'Tailored Tutors',
    subTitle: 'Database Developer',
    location: 'Remote',
    timeRange: 'Febuary 2022 - April 2022',
    image: 'tailored-tutors-logo.png',
    externalLink: 'https://tailoredtutors.co.uk/',
    content: {
      listItems: [
        'Refined API and relational database-designing skills through the development of a data warehouse system.',
      ],
      skills: ['Python', 'PostgreSQL'],
    },
  },
  {
    title: 'Selkirk Innovates',
    subTitle: 'Software Co-op',
    location: 'Remote',
    timeRange: 'January 2021 - April 2022',
    image: 'selkirk-innovates-logo.png',
    externalLink: 'https://selkirk.ca/about-selkirk/selkirk-innovates',
    content: {
      listItems: [
        "Gained a robust understanding of full-stack development and RESTful API design by developing a progressive web application that streamlined the client's field data collection process.",
        'Gained relational database experience using Postgres by designing detailed ERDs and implementing the designs using the psql CLI.',
        'Collaborated with team members on software projects using Git, refining my skills working with branches and merging work with team members.',
        'Obtained experience working on remote Linux machines by building and hosting web services using Nginx, Gunicorn, and uWSGI.',
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Science',
        'Quasar Framework',
        'Python',
        'Linux',
        'PostgreSQL',
        'JavaScript',
      ],
    },
  },
  {
    title: 'Verathon Medical',
    subTitle: 'Mechanical Engineering Co-op',
    location: 'Burnaby BC',
    timeRange: 'September 2019 - April 2020',
    image: 'verathon-logo.png',
    externalLink: 'https://www.verathon.com/',
    content: {
      listItems: [
        'Refined SolidWorks and rapid prototyping skills by designing test jigs and performing design changes.',
        'Improved technical writing skills through the completion of product test plans/protocols, test method validation plans, and test reports.',
        'Gained knowledge of the engineering design change process by writing Engineering Change Requests and Orders and other other required documentation to implement design changes.',
        'Performed root cause investigations on current products to determine the cause of issues reported by customer.',
      ],
    },
  },
];
