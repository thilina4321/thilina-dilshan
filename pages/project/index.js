import Projects from "../../components/projects/projects";

const projects = [
  {
    id: 1,
    name: "Disney Clone",
    description:
      `This is a clone project I have done with react.Js. For this application I use redux toolkit too for the state managment.
      And also for the authentication I used firebase authentication with google and store some information in firebase firestore.`,
    gitLink: "https://github.com/thilina4321/react-disney-clone",
    link: "https://react-disney-clone-dd5d8.web.app/home",
    proImage: "/disney.PNG",
    isHost: true,
  },
  {
    id: 2,
    name: "Chat Application",
    description:
      "This is a chat application that I created using node.JS and socket.io. From this application your can create a chat room and make a chat with your friends",
    gitLink: "https://github.com/thilina4321/chat-app",
    link: "https://chat-node-socket-thilina1234.herokuapp.com",
    proImage: "/chat.PNG",
    isHost: true,
  },
  {
    id: 3,
    name: "Post share Application",
    description:
      `This is a post sharing application that I created using next.JS, node.JS
       MongoDB(Mongoose) and redux tool kit. This is a simple application that I created while
       learning next.JS`,
    gitLink: "https://github.com/thilina4321/experience-share",
    link: "https://experience-share.vercel.app/",
    proImage: "/exe.PNG", 
    isHost: true,
  },
  {
    id: 4,
    name: "Weather app",
    description:
      `This is a weather application I created using next.js. It is a project idea that 
      I got from the LinkedIn post. As it is small project I think to create the 
      application with simple functionalities. I got the weather information from openweather map API.
      I use fetch API for the data fetching`,
    gitLink: "https://github.com/thilina4321/react-weather-app",
    link: "https://react-weather-app-ivb8m589h-thilina4321.vercel.app/",
    proImage: "/weather.PNG", 
    isHost: true,
  },
];


const EducationPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3> Some Application that I have created </h3>
      <Projects projects={projects} />
    </div>
  );
};

export default EducationPage;
