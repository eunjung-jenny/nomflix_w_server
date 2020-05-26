import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    term: "",
    error: null,
    loading: true,
  };

  getResults = async (term) => {
    try {
      const { data: movieResults } = await moviesApi.search(
        term
      );
      const { data: tvResults } = await tvApi.search(term);
      this.setState({ term, movieResults, tvResults });
    } catch {
      this.setState({
        error: "Sorry, we have some networking problem",
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    const {
      props: {
        match: {
          params: { term },
        },
      },
    } = this;
    this.getResults(term);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.term) {
      const {
        props: {
          match: {
            params: { term },
          },
        },
      } = this;
      if (this.state.term !== term) {
        this.getResults(term);
      }
    }
  }

  render() {
    const {
      movieResults,
      tvResults,
      error,
      loading,
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        error={error}
        loading={loading}
      />
    );
  }
}
