const initialState: any = [];

const favoritesReducer = (state: any = initialState, action: any) => {
  const { payload } = action;

  payload.isFavorite = !payload.isFavorite;
  return [...state, payload];
};

export { initialState, favoritesReducer };
