import whiteLinkedin from "src/assets/white-linkedin.png";
import whiteGithub from "src/assets/white-github.png";

export function Contact() {
  return (
    <footer className="px-[40px] py-[120px] text-[#ffffff] w-full max-w-[1200px]">
      <h2 className="font-bold text-[34px] mb-[70px]">Contact:</h2>
      <p className="text-[18px] mb-[20px]">
        Email: torniketsagareishvili64@gmail.com
      </p>
      <nav className="flex items-center">
        <a target="_blank" href="https://github.com/Tornike512">
          <img
            className="w-[50px]"
            src={whiteLinkedin}
            alt="White Linkedin Logo"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/tornike-tsagareishvili-9a2790280/"
        >
          <img className="w-[50px]" src={whiteGithub} alt="White Github Logo" />
        </a>
      </nav>
    </footer>
  );
}

export default Contact;
