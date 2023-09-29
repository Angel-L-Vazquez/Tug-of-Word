import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div>
      <h1> About </h1>
      <p> Hello World! </p>
      <Link to="/"> Home </Link>
    </div>
  );
};

export default AboutPage;
