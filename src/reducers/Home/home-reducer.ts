// Initial State
const initialState: any = {
  currencyResults: []
};

const homeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_TOP_CURRENCIES":
      return {
        currencyResults: action.results
      };
    default:
      return state;
  }
};

export { initialState, homeReducer };
