// Initial State
const initialState: any = {
  activeTab: 1
};

const homeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_TAB":
      return {
        activeTab: action.tab
      };
    default:
      return state;
  }
};

export { initialState, homeReducer };
