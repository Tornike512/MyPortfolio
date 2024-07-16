import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTargetContact } from "src/redux/refs";

import whiteLinkedin from "src/assets/white-linkedin.png";
import whiteGithub from "src/assets/white-github.png";

export function Contact() {
  const targetContact = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (targetContact) {
      dispatch(setTargetContact(targetContact.current));
    }
  }, [dispatch]);

  return (
    <footer
      ref={targetContact}
      className="px-[40px] py-[120px] text-[#ffffff] w-full max-w-[1200px] lg:py-[60px] lg:flex lg:flex-col lg:items-center"
    >
      <h2 className="font-bold text-[34px] mb-[70px] lg:mb-[30px]">Contact:</h2>
      <p className="text-[18px] mb-[20px] whitespace-nowrap sm:text-[16px]">
        Email: torniketsagareishvili64@gmail.com
      </p>
      <nav className="flex items-center">
        <a
          target="_blank"
          href="https://github.com/Tornike512"
          rel="noopener noreferrer"
        >
          <img
            className="w-[50px]"
            src={whiteLinkedin}
            alt="White Linkedin Logo"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/tornike-tsagareishvili-9a2790280/"
        >
          <img className="w-[50px]" src={whiteGithub} alt="White Github Logo" />
        </a>
      </nav>
    </footer>
  );
}

export default Contact;
