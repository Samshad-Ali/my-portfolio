import { MdOutlineEngineering } from "react-icons/md";

const Header = () => {

  return (
    <>
      <nav>
        <NavContent title="Portfolio" />
      </nav>
    </>
  );
};

export default Header;

const NavContent = ({ title }) => {
  return (
    <>
      <h2>
        {title} <MdOutlineEngineering />
      </h2>
      <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#skills"
        >
          Skill
        </a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto: sam606166@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};
