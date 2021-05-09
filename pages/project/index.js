import Projects from "../../components/projects/projects";

const projects = [
  {
    id: 1,
    name: "Chat Application",
    description:
      "This is a chat application that i created using node.JS and socket.io. From this application your can create a chat room and make a chat with your friends",
    gitLink: "https://github.com/thilina4321/chat-app",
    link: "https://chat-node-socket-thilina1234.herokuapp.com",
    proImage: "/chat.PNG",
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
