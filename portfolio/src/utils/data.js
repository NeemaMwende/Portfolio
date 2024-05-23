import image1 from "../Images/angel1.jpeg";
import image2 from "../Images/angel2.jpeg";
import image3 from "../Images/logo1.jpeg";
import image4 from "../Images/logo2.jpeg";

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