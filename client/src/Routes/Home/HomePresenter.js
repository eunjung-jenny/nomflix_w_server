import React from "react";
import PropTypes from "prop-types";

const HomePresenter = ({ nowPlaying, error, loading }) =>
  loading
    ? "loading..."
    : nowPlaying.map((movie) => <p>{movie.title}</p>);

export default HomePresenter;
