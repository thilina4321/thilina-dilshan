import Place from "./place";
import classes from "./places.module.css";

const places = [
  {
    name: "Institute Of Technology University Of Moratuwa(NDT)",
    image: "/itum.jpg",
    time: "2019 and ongoing",
    context: "Information Technology",
  },
  {
    name: "Ananda College Colombo",
    image: "/ananda.jpg",
    time: "2014 to 2016",
    context: "GCE Advanced Level",
  },
  {
    name: "Asoka College Colombo",
    image: "/asoka.jpg",
    time: "2008 to 2013",
    context: "Grade 6 to GCE Ordinary Level",
  },
  {
    name: "Biyagama Junior School",
    image: "/biyagama.PNG",
    time: "2003 to 2007",
    context: "Primary Education",
  },
];

const Places = () => {
  return (
    <section style={{marginTop:'70px', textAlign:'center'}}>
      <h1  > My Education Places </h1>
      <div className={classes.section}>
        {places.map((place, index) => (
          <Place key={index} place={place} />
        ))}
      </div>
    </section>
  );
};

export default Places;
