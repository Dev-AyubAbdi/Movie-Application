import { MovieCard } from "../Components/MovieCard";

export const Home = () => {
  const Movie = [
    {
      id: 1,
      title: "Movie Meletria",
      date_Move: "10-3-2020",
      image:
        "https://plus.unsplash.com/premium_photo-1677609987846-0e6b7f196983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      title: "Movie Meletria",
      date_Move: "10-3-2020",
      image:
        "https://images.unsplash.com/photo-1664487752205-4ad3ff14744f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    },

    {
      id: 3,
      title: "Movie Meletria",
      date_Move: "10-3-2020",
      image:
        "https://images.unsplash.com/photo-1665060221922-aff438b69d36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      title: "Movie Meletria",
      date_Move: "10-3-2020",
      image:
        "https://plus.unsplash.com/premium_photo-1677609987846-0e6b7f196983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      title: "Movie Meletria",
      date_Move: "10-3-2020",
      image:
        "https://plus.unsplash.com/premium_photo-1677609987846-0e6b7f196983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    },
    {
      id: 6,
      title: "Movie Meletria",
      date_Move: "10-3-2020",
      image:
        "https://plus.unsplash.com/premium_photo-1677609987846-0e6b7f196983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    },
    {
      id: 7,
      title: "Movie Meletria",
      date_Move: "10-3-2020",
      image:
        "https://plus.unsplash.com/premium_photo-1677609987846-0e6b7f196983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    },
  ];
  return (
    <>
      <div className="flex pt-4">
        <form className="p-4 flex w-full">
          <input
            className="border flex-1 mr-7 rounded-lg outline-0 text-xl p-3"
            type="text"
            placeholder="Search Movie Favorite..."
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
