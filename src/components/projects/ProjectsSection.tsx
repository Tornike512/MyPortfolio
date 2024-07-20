import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { setTargetProjects } from "src/redux/refs";

import unilabWebsite from "src/assets/unilab.jpg";
import amazonCloneWebsite from "src/assets/amazon-clone.jpg";
import agriosWebsite from "src/assets/agrios.jpg";

export function ProjectsSection() {
  const targetProjects = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (targetProjects) {
      dispatch(setTargetProjects(targetProjects.current));
    }
  }, [dispatch]);

  return (
    <section
      ref={targetProjects}
      className="flex flex-col justify-center items-center px-[40px] text-[#CCD6F6]"
    >
      <ul className="flex w-full max-w-[1200px] py-[120px] items-center lg:flex-col lg:items-center lg:justify-center lg:text-center lg:mb-5 lg:pb-0 lg:pt-[60px]">
        <li className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
          <h2 className="text-[34px] font-bold mb-[30px]">Amazon Clone</h2>
          <p className="text-[18px] w-[90%] pr-[25px] rounded-[14px] lg:pr-0">
            Worked on a full-stack Amazon clone, focusing on the front-end with
            React and TypeScript. Collaborated with back-end developers to add
            user authentication, product listings, and a shopping cart. Used
            JSON Web Tokens (JWT) and OAuth for secure login and authorization.
            Tested API endpoints with Postman to ensure smooth interaction
            between front-end and back-end.
          </p>
        </li>
        <a
          className="w-[170%] lg:w-full lg:mt-[30px]"
          target="_blank"
          href="https://amazon-clone-rust-psi.vercel.app/"
        >
          <img
            className="w-full object-cover shadow-[0_0_187px_#bf7eff]"
            src={amazonCloneWebsite}
            alt="Project Image"
          />
        </a>
      </ul>
      <ul className="flex w-full max-w-[1200px] items-center py-[120px] lg:flex-col lg:items-center lg:justify-center lg:text-center lg:mb-5 lg:pb-0 lg:pt-[60px]">
        <li className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
          <h2 className="text-[34px] font-bold mb-[30px]">Explore Era</h2>
          <p className="text-[18px] w-[90%] pr-[25px] rounded-[14px] lg:pr-0">
            Built a hotel and flight booking website as part of the Unilab
            Acceleration Program. Worked on the front-end using Sass and Next.js
            to create features for registration, authorization, hotel booking,
            and flight booking. Added filters to improve the search experience
            for hotels.
          </p>
        </li>
        <a
          className="w-[170%] lg:w-full lg:mt-[30px]"
          target="_blank"
          href="https://melodic-meringue-713e37.netlify.app/"
        >
          <img
            className="w-full object-cover shadow-[0_0_187px_#bf7eff]"
            src={unilabWebsite}
            alt="Project Image"
          />
        </a>
      </ul>
      <ul className="flex w-full max-w-[1200px] items-center py-[120px] lg:flex-col lg:items-center lg:justify-center lg:text-center lg:mb-5 lg:pb-0 lg:pt-[60px]">
        <li className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
          <h2 className="text-[34px] font-bold mb-[30px]">Agrios</h2>
          <p className="text-[18px] w-[90%] pr-[25px] rounded-[14px] lg:pr-0">
            Created a fully responsive agriculture e-commerce website for buying
            and selling agricultural products. The project included building a
            back-end system to manage inventory. Developed custom APIs for
            product requests and used Tailwind CSS for styling.
          </p>
        </li>
        <a
          className="w-[170%] lg:w-full lg:mt-[30px]"
          target="_blank"
          href="https://669ba1e4f8996d5036c64e57--glittering-rugelach-aaada7.netlify.app/"
        >
          <img
            className="w-full object-cover shadow-[0_0_187px_#bf7eff]"
            src={agriosWebsite}
            alt="Project Image"
          />
        </a>
      </ul>
    </section>
  );
}

export default ProjectsSection;
