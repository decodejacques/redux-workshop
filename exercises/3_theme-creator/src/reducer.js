let reducer = (state, action) => {
  switch (action.type) {
    case "backgroundColorChange":
      return {
        ...state,
        style: { ...state.style, backgroundColor: action.content }
      };
    case "fontFamilyChange":
      return {
        ...state,
        style: { ...state.style, fontFamily: action.content }
      };
    case "fontStyleChange":
      return { ...state, style: { ...state.style, fontStyle: action.content } };
    case "fontWeightChange":
      return {
        ...state,
        style: { ...state.style, fontWeight: action.content }
      };
    default:
      return state;
  }
};

export default reducer;
