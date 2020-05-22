import React from "react";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Loader from "Components/Loader";
import Message from "Components/Message";
import styled from "styled-components";

const Container = styled.div``;

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} color={"#F44336"} />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <Poster
              key={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              isMovie={false}
            />
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
