import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 2px;
  background-position: center center;
  opacity: 1;
  transition: opacity 0.1s linear;
`;

const Title = styled.span`
  position: absolute;
  top: 20px;
  left: 5px;
  right: 5px;
  text-align: center;
  font-size: 20px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 25px;
  left: 5px;
  right: 5px;
  text-align: center;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const Container = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.1;
    }
    ${Title} {
      opacity: 1;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Poster = ({
  id,
  title,
  imageUrl,
  rating,
  isMovie,
}) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
            : require("assets/noImage.jpg")
        }
      />
      <Title>{title}</Title>
      <Rating>
        <span role="img" aria-label="rating">
          ⭐️
        </span>
        {rating}
      </Rating>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  rating: PropTypes.number,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
