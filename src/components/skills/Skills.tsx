import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTargetRef } from "src/redux/targetRef";

import typescriptLogo from "src/assets/typescript-logo.svg";
import reactLogo from "src/assets/react-logo.png";
import sassLogo from "src/assets/sass-logo.svg";
import antDesignLogo from "src/assets/ant-design-logo.svg";
import tailwindLogo from "src/assets/tailwind-logo.svg";
import reduxLogo from "src/assets/redux-logo.png";
import reactQueryLogo from "src/assets/react-query-logo.svg";
import postmanLogo from "src/assets/postman-logo.svg";
import figmaLogo from "src/assets/figma-logo.png";
import adobePhotoshopLogo from "src/assets/photoshop-logo.svg";
import graphQlLogo from "src/assets/graphql-logo.svg";

export function Skills() {
  const targetRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (targetRef) {
      dispatch(setTargetRef(targetRef.current));
    }
  }, [dispatch]);

  return (
    <section
      ref={targetRef}
      className="flex items-center justify-center flex-col max-w-[1200px] w-full py-[120px] px-[40px] md:pb-0"
    >
      <h2 className="text-[24px] text-[#ffffff] font-bold whitespace-nowrap sm:text-[18px]">
        Looking for Front-End Developer Roles
      </h2>
      <p className="mb-[80px] text-[17px] text-[#ffffff] font-bold">
        My Skills Include:
      </p>
      <figure className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-x-[80px] lg:grid-cols-[1fr_1fr_1fr] lg:gap-y-[60px] ">
        <img
          className="w-[100%] cursor-pointer"
          src={typescriptLogo}
          alt="Typescript Logo"
        />
        <img
          className="w-[100%] cursor-pointer"
          src={reactLogo}
          alt="React Logo"
        />
        <img
          className="w-[100%] cursor-pointer"
          src={sassLogo}
          alt="Sass Logo"
        />
        <img
          className="w-[100%] cursor-pointer"
          src={antDesignLogo}
          alt="Ant Design Logo"
        />
        <img
          className="w-[100%] cursor-pointer"
          src={tailwindLogo}
          alt="Tailwind Logo"
        />
        <img
          className="w-[100%] cursor-pointer"
          src={reduxLogo}
          alt="Redux Logo"
        />
      </figure>
      <figure className="flex justify-center items-center mt-[100px]">
        <img
          className="w-[10%] lg:w-[19%] cursor-pointer mr-[80px] lg:mr-[20px]"
          src={reactQueryLogo}
          alt="React Query Logo"
        />
        <img
          className="w-[10%] lg:w-[19%] cursor-pointer mr-[80px] lg:mr-[20px]"
          src={postmanLogo}
          alt="Postman Logo"
        />
        <img
          className="w-[10%] lg:w-[19%] cursor-pointer mr-[80px] lg:mr-[20px]"
          src={figmaLogo}
          alt="Figma Logo"
        />
        <img
          className="w-[10%] lg:w-[19%] cursor-pointer mr-[80px] lg:mr-[20px]"
          src={adobePhotoshopLogo}
          alt="Adobe Photoshop Logo"
        />
        <img
          className="w-[10%] lg:w-[19%] cursor-pointer"
          src={graphQlLogo}
          alt="GraphQl Logo"
        />
      </figure>
    </section>
  );
}

export default Skills;
