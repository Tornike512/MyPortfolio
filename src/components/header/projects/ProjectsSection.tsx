import unilabWebsite from "src/assets/unilab.jpg";
import amazonCloneWebsite from "src/assets/amazon-clone.jpg";
import agriosWebsite from "src/assets/agrios.jpg";

export function ProjectsSection() {
  return (
    <section>
      <ul>
        <li>
          <h2>project name</h2>
          <p>project description</p>
        </li>
        <img src={amazonCloneWebsite} alt="Project Image" />
      </ul>
      <ul>
        <li>
          <h2>project name</h2>
          <p>project description</p>
        </li>
        <img src={agriosWebsite} alt="Project Image" />
      </ul>
      <ul>
        <li>
          <h2>project name</h2>
          <p>project description</p>
        </li>
        <img src={unilabWebsite} alt="Project Image" />
      </ul>
    </section>
  );
}

export default ProjectsSection;
