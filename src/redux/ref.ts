import {
  targetAbout,
  targetSkills,
  targetContact,
  targetProjects,
} from "./refs";

const initialState = {
  targetAbout: null,
  targetSkills: null,
  targetContact: null,
  targetProjects: null,
};

const refSlice = (state = initialState, action: any) => {
  switch (action.type) {
    case targetAbout:
      return { ...state, targetAbout: action.payload };
    case targetSkills:
      return { ...state, targetSkills: action.payload };
    case targetProjects:
      return { ...state, targetProjects: action.payload };
    case targetContact:
      return { ...state, targetContact: action.payload };
    default:
      return state;
  }
};

export default refSlice;
