import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1> Home </h1>
      <p> Hello World! </p>
      <Link to="/about"> About </Link>
    </div>
  );
};

export default HomePage;
