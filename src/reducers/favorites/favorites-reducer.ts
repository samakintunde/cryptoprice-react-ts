const initialState: any = [];

const favoritesReducer = (state: any = initialState, action: any) => {
  const { payload } = action;

  // let clickedFavorite = state.filter(
  //   (favorite: { id: number }) => favorite.id === payload.id
  // );

  payload.isFavorite = !payload.isFavorite;
  return [...state, payload];
};

export { initialState, favoritesReducer };
