export const targetAbout = "about_ref";
export const targetSkills = "skills_ref";
export const targetProjects = "projects_ref";
export const targetContact = "contact_ref";

type RefPayload = HTMLElement | null;

export const setTargetAbout = (about: RefPayload) => ({
  type: targetAbout,
  payload: about,
});

export const setTargetSkills = (skills: RefPayload) => ({
  type: targetSkills,
  payload: skills,
});

export const setTargetProjects = (projects: RefPayload) => ({
  type: targetProjects,
  payload: projects,
});

export const setTargetContact = (contact: RefPayload) => ({
  type: targetContact,
  payload: contact,
});
