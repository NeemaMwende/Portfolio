import image1 from "../Images/tool.png";
import image2 from "../Images/tool.png";
import image3 from "../Images/tool.png";
import image4 from "../Images/soft.png";
import image5 from "../Images/image1.jpg";

export const SKILLS = [
    {
        title: "Frontend",
        icon: {image1},
        skills: [
            { skill: "HTML5", percentage: "80%"},
            { skill: "CSS3 (Sass/Scss)", percentage: "98%"},
            { skill: "Javascript", percentage: "75%"},
            { skill: "React.js", percentage: "88%"}
        ],
    },
    {
        title: "Backend",
        icon: {image2},
        skills: [
            { skill: "Node.js", percentage: "70%"},
            { skill: "Express.js", percentage: "65%"},
            { skill: "Express.js", percentage: "80%"},
            { skill: "Express.js", percentage: "65%"},
        ],
    },
    {
        title: "Tools",
        icon: {image3},
        skills: [
            { skill: "Git & Github", percentage: "85%"},
            { skill: "Visual Studio Code", percentage: "75%"},
            { skill: "Webpack", percentage: "60%"},
            { skill: "Responsive Design", percentage: "88%"}
        ],
    },
    {
        title: "Soft Skills",
        icon: {image4},
        skills: [
            { skill: "Problem-solving", percentage: "80%"},
            { skill: "Collaboration", percentage: "98%"},
            { skill: "Attention to Detail", percentage: "75%"},
            { skill: "Team-work", percentage: "90%"}
        ],
    },
];
export const WORK_EXPERIENCE = [
    {
        title: "Senior Frontend Developer at Tech Innovators",
        date: "January 2022 - Present",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
    {
        title: "Junior Web Developer at Digital Solutions",
        date: "June 2020 - December 2021",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
    {
        title: "Frontend Intern at Web Studio",
        date: "May 2019 - August 2019",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
    {
        title: "React Developer at Glitex Solutions",
        date: "January 2022 - September 2022",
        responsibilities: [
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
          "lorem lipsum lipsum lipsum lipsum lipsum lipsum lipsum lipsum ",
        ],
    },
];
export const PROJECTS = [
    { name: 'Project 1', description: 'Description for Project 1', image: {image5}, link: 'https://project1.com' },
    { name: 'Project 2', description: 'Description for Project 2', image: {image5}, link: 'https://project2.com' },
    { name: 'Project 3', description: 'Description for Project 3', image: {image5}, link: 'https://project3.com' },
  ];