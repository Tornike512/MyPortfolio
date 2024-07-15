import { targetRef } from "./targetRef";

const initialState = {
  targetRef: null,
};

const refSlice = (state = initialState, action: any) => {
  switch (action.type) {
    case targetRef:
      return { ...state, targetRef: action.payload };
    default:
      return state;
  }
};

export default refSlice;
