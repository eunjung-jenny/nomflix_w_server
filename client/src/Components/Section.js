import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 15px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
