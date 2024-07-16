import { useSelector } from "react-redux";

export function Header() {
  const targetAbout = useSelector((state: any) => state.refs.targetAbout);
  const targetSkills = useSelector((state: any) => state.refs.targetSkills);
  const targetProjects = useSelector((state: any) => state.refs.targetProjects);
  const targetContact = useSelector((state: any) => state.refs.targetContact);

  const handleAboutClick = () => {
    if (targetAbout) {
      targetAbout.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkillsClick = () => {
    if (targetSkills) {
      targetSkills.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    if (targetProjects) {
      targetProjects.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    if (targetContact) {
      targetContact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full h-[113px] bg-[#1A0B2E] flex justify-center">
      <ul className="flex items-center justify-between px-[40px] w-full max-w-[1200px] text-[#ffffff]">
        <li
          onClick={handleAboutClick}
          className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]"
        >
          About
        </li>
        <li
          onClick={handleSkillsClick}
          className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]"
        >
          Skills
        </li>
        <li
          onClick={handleProjectsClick}
          className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]"
        >
          Projects
        </li>
        <li
          onClick={handleContactClick}
          className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]"
        >
          Contact
        </li>
      </ul>
    </header>
  );
}

export default Header;
