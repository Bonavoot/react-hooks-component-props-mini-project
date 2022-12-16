const About = ({ aboutImage, aboutText }) => {
  return (
    <div>
      <aside>
        <img
          defaultValue="https://via.placeholder.com/215"
          src={aboutImage}
          alt="blog logo"
        />
        <p>{aboutText}</p>
      </aside>
    </div>
  );
};

export default About;
