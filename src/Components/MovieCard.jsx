import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="p-4 bg-gray-100 m-3">
      {
        <div className="">
          <div className="relative">
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <span
              onClick={() => alert("cliked")}
              className="absolute top-2 right-3 text-2xl bg-pink-700 text-white rounded-full w-10 h-10 text-center cursor-pointer"
            >
              ♥︎
            </span>
          </div>

          <div>
            <h2 className="font-semibold pt-4">{movie.title}</h2>
            <span>{movie.release_date.split("-")[0]}</span>
          </div>
        </div>
      }
    </div>
  );
};
