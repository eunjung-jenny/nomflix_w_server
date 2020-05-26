import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  background-color: rgba(252, 252, 252, 0.1);
  border-radius: 10px;
  padding: 3px 10px;
  color: white;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
  width: 100%;
`;

class SearchForm extends React.Component {
  state = { searchTerm: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: { searchTerm },
      props: {
        history: { replace },
      },
    } = this;
    if (searchTerm !== "") {
      replace(`/search/${searchTerm}`);
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  initializeTerm = (event) => {
    this.setState({
      searchTerm: "",
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={this.updateTerm}
          onFocus={this.initializeTerm}
        ></Input>
      </Form>
    );
  }
}

export default withRouter(SearchForm);
