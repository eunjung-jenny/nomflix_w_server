import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 14px;
  line-height: 1.2;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-size: cover;
  opacity: 0.5;
  filter: blur(5px);
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  filter: blur(0);
  opacity: 1;
  position: relative;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: top;
  width: 30%;
  min-width: 300px;
`;

const Info = styled.div`
  width: 70%;
  padding: 10px 60px 10px 30px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const FeatureContainer = styled.div`
  margin: 10px 0;
`;

const Divider = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Overview = styled.p``;

const DetailPresenter = ({
  result,
  error,
  loading,
  isMovie,
}) =>
  loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} color={"#F44336"} />
  ) : (
    <Container>
      <Backdrop
        imageUrl={
          result && result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : ""
        }
      />
      <Content>
        <Poster
          imageUrl={
            result && result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : ""
          }
        />
        <Info>
          <Title>
            {isMovie
              ? result.original_title
              : result.original_name}
          </Title>
          <FeatureContainer>
            {result.runtime
              ? `${result.runtime} min`
              : `${result.episode_run_time[0]} min`}
            <Divider>|</Divider>
            {result.release_date
              ? result.release_date.slice(0, 4)
              : `${result.first_air_date.slice(0, 7)} ~ ${
                  result.last_air_date &&
                  result.last_air_date.slice(0, 7)
                }`}
            <Divider>|</Divider>
            {result.genres &&
              result.genres.map((genre, idx) =>
                idx === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} ・ `
              )}
            <Divider>|</Divider>
            {result.vote_average &&
              `⭐️ ${result.vote_average}`}
          </FeatureContainer>
          <hr />
          <Overview>
            {result && result.overview
              ? result.overview
              : ""}
          </Overview>
        </Info>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
