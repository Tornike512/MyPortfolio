import personImage from "assets/person-image.jpg";

export function PersonInfo() {
  return (
    <section className="flex flex-col items-center justify-center max-w-[1200px] w-full relative py-[120px] px-[40px] text-[#ffffff]">
      <figure className="flex items-center justify-center w-full lg:flex-col">
        <img
          className="w-[200px] rounded-[100%] mr-[40px] shadow-[0_0_187px_#bf7eff] lg:mr-0"
          src={personImage}
          alt="Person Photo"
        />
        <figcaption className="font-bold text-[50px]">
          <p className="text-[20px] text-[#7127BA] lg:mt-[10px] lg:flex lg:justify-center">
            Front-End Developer
          </p>
          <h1 className="whitespace-nowrap md:text-[35px] md:mb-[20px]">
            Tornike Tsagareishvili
          </h1>
        </figcaption>
      </figure>
      <p className="absolute bottom-[-12%] w-full text-[18px] font-bold text-center md:relative">
        I'm a front-end developer with over 2 years of experience. I focus on
        creating user-friendly interfaces and seamless user experiences. I've
        worked closely with backend developers on projects, using tools like
        Postman for API integration and functionality testing. My goal is to use
        technology to develop responsive web applications that meet both user
        needs and business goals.
      </p>
    </section>
  );
}

export default PersonInfo;
