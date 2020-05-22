import React from "react";
import PropTypes from "prop-types";

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  error,
  loading,
}) =>
  loading ? (
    "loading..."
  ) : (
    <div>
      Now Playing
      {topRated.map((show) => (
        <p key={show.id}>{show.name}</p>
      ))}
      Upcoming
      {popular.map((show) => (
        <p key={show.id}>{show.name}</p>
      ))}
      Popular
      {airingToday.map((show) => (
        <p key={show.id}>{show.name}</p>
      ))}
    </div>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
