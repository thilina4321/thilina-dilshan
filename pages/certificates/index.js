import classes from "./certificate.module.css";

const Certificates = () => {
  return (
    <section>
      <div style={{ textAlign: "center" }}>
        <h1> This is the Certificates Sections </h1>
      </div>
      <div className={classes.card}>
        <h1> AWS EC2 Certificate </h1>

        <a
          target="_blank"
          href="https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=TokKsBiGfEOaDlpkdhxr5w2"
        >
          Click Here To See
        </a>
      </div>
    </section>
  );
};

export default Certificates;
