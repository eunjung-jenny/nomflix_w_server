import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 30px;
  color: ${(props) => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

export default Message;
