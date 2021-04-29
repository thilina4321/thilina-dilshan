import classes from "./skill.module.css";
import Image from "next/image";

const images = [
  { img: "/js.png" , name:'Javascript'},
  {img:"/ts.png", name:'TypeScript'},
  { img: "/angular.png", name:'Angular'},
  {img:"/node.jpeg", name:'Node.Js'},
  {img: "/vue.jpg", name:'Vue.Js'},
  {img:"/flutter.png", name:'Flutter'},
  {img:"/react.jpg", name:'React'},
];

const Skill = () => {
  return (
    <section className={classes.section}>
      <h1> Familiar Technologies </h1>
      <div className={classes.div}>
        {images.map((image, index) => (
          <div key={index} className={classes.image}>
            <Image
              className={classes.img}
              src={image.img}
              width={300}
              height={200}
            />
            <h2> {image.name} </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
