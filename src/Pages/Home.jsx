import { useEffect, useState } from "react";
import { MovieCard } from "../Components/MovieCard";
import { getPopularMovies, searchMovies } from "../Services/Api";

export const Home = () => {
  const [Movie, setMovie] = useState([]);
  const [searchquery, setSearchQuery] = useState("");

  useEffect(() => {
    const getAPIFetch = async () => {
      try {
        const getPopular = await getPopularMovies();
        console.log(getPopular);
        setMovie(getPopular);
      } catch (error) {
        console.error("failer fetcha data");
      }
    };
    getAPIFetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchqueryPopular = await searchMovies(searchquery);
    setMovie(searchqueryPopular);
  };

  return (
    <>
      <div className="flex pt-4">
        <form onSubmit={handleSubmit} className="p-4 flex w-full">
          <input
            className="border flex-1 mr-7 rounded-lg outline-0 text-xl p-3"
            type="text"
            placeholder="Search Movie Favorite..."
            value={searchquery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="border bg-pink-500 p-4 rounded-lg text-white mr-3"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
        {Movie.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};
