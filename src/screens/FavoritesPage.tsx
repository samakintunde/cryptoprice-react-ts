import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { FavoritesContext } from "../context/FavoritesContext";
import CurrencyCard from "../components/CurrencyCard/CurrencyCard";
import Container from "../components/Container/Container";

const FavoritesPage = () => {
  const { results } = useContext(HomeContext);
  const { dispatchFavorites } = useContext(FavoritesContext);

  const { currencyResults } = results;

  const handleFavorite = (currencyResult: object) => {
    dispatchFavorites({ payload: currencyResult });
  };

  return (
    <Container padding="1rem 0.75rem">
      {currencyResults.map(
        (currencyResult: any, i: string | number | undefined) => {
          if (currencyResult.isFavorite) {
            return (
              <CurrencyCard
                key={i}
                currencyResult={currencyResult}
                handleFavorite={handleFavorite}
              />
            );
          }
        }
      )}
    </Container>
  );
};

export default FavoritesPage;
