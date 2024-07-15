import { useDispatch, useSelector } from "react-redux";
import { targetRef } from "src/redux/targetRef";

export function Header() {
  const dispatch = useDispatch();
  const targetRef = useSelector((state: any) => state.targetRef);

  const handleAboutClick = () => {
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth" });
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
        <li className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]">
          Skills
        </li>
        <li className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]">
          Projects
        </li>
        <li className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]">
          Contact
        </li>
      </ul>
    </header>
  );
}

export default Header;
