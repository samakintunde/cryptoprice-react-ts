import currencyResults from "../../store/currency-results";

// Initial State
const initialState: any = {
  currencyResults
};

const homeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_TAB":
      return {
        activeTab: action.tab,
        ...currencyResults
      };
    default:
      return state;
  }
};

export { initialState, homeReducer };
