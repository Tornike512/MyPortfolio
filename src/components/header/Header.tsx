export function Header() {
  return (
    <header className="w-full h-[113px] bg-[#1A0B2E] flex justify-center">
      <ul className="flex items-center justify-between px-[40px] w-full max-w-[1200px] text-[#ffffff]">
        <li className="text-[20px] font-bold cursor-pointer hover:text-[#7127BA]">
          About
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
