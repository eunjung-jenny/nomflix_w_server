import React from "react";
import PropTypes from "prop-types";

const HomePresenter = ({
  nowPlaying,
  upcoming,
  popular,
  error,
  loading,
}) =>
  loading ? (
    "loading..."
  ) : (
    <div>
      Now Playing
      {nowPlaying.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
      Upcoming
      {upcoming.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
      Popular
      {popular.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
