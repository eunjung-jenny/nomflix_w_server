import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  padding: 12px 15px;
  border-bottom: 2px solid
    ${(props) =>
      props.current ? "#F44336" : "transparent"};
`;

const SLink = styled(Link)``;

// const Form = styled.form``;

// const Input = styled.input``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/" replace>
          Movie
        </SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv" replace>
          TV
        </SLink>
      </Item>
      <Item>
        <SearchForm />
      </Item>
    </List>
  </Header>
));
