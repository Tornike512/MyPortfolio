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
  return (
    <section className="max-w-[1200px] w-full py-[120px] px-[40px]">
      <h2>Looking for Front-End Developer Roles</h2>
      <p>My Skills Include:</p>
      <figure>
        <img src={typescriptLogo} alt="Typescript Logo" />
        <img src={reactLogo} alt="React Logo" />
        <img src={sassLogo} alt="Sass Logo" />
        <img src={antDesignLogo} alt="Ant Design Logo" />
        <img src={tailwindLogo} alt="Tailwind Logo" />
        <img src={reduxLogo} alt="Redux Logo" />
      </figure>
      <figure>
        <img src={reactQueryLogo} alt="React Query Logo" />
        <img src={postmanLogo} alt="Postman Logo" />
        <img src={figmaLogo} alt="Figma Logo" />
        <img src={adobePhotoshopLogo} alt="Adobe Photoshop Logo" />
        <img src={graphQlLogo} alt="GraphQl Logo" />
      </figure>
    </section>
  );
}

export default Skills;
