import { FEMALE, MALE, MARGINALIZED } from "./StaticsFormAction";

const reducer = (state, action) => {
  if (action.type === MALE) {
    return { ...state, male: action.value, total: state.female + action.value };
  } else if (action.type === FEMALE) {
    return { ...state, female: action.value, total: state.male + action.value };
  } else if (action.type === MARGINALIZED) {
    return { ...state, marginalized: action.value };
  }
  return state;
};

export default reducer;
