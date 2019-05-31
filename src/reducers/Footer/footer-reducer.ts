// Initial State
const initialState: any = {
  activeIndex: 0
};

const footerReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_TAB":
      return {
        activeIndex: action.index
      };

    default:
      return state;
  }
};

export { initialState, footerReducer };
