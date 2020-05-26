import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.div``;

const SearchPresenter = ({
  movieResults,
  tvResults,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} color={"#F44336"} />
  ) : (
    <Container>
      {movieResults && movieResults.length > 0 && (
        <Section title="Movies">
          {movieResults.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {tvResults && tvResults.length > 0 && (
        <Section title="TV Shows">
          {tvResults.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {(!movieResults || movieResults.length === 0) &&
        (!tvResults || tvResults.length === 0) && (
          <Message text="No results found." color="grey" />
        )}
    </Container>
  );

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
