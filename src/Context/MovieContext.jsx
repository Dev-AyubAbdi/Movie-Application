import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export const useMovieContext = () => useContext(MoviesContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storeFav = localStorage.getItem("favorites");

    if (storeFav) setFavorites(JSON.parse(storeFav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorites));
  }, [favorites]);

  //   addFavorite

  const addFavorite = (movie) => {
    setFavorites((pre) => [...pre, movie]);
  };

  // removeFavorite

  const RemoveFromFavorite = (movieId) => {
    setFavorites((pre) => pre.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addFavorite,
    removeEventListener,
    isFavorite,
  };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};
