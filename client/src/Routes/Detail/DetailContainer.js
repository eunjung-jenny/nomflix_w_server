import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    id: null,
    isMovie: null,
    result: null,
    error: null,
    loading: true,
  };

  getResult = async (isMovie, id) => {
    console.log("getResult");
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(
          id
        ));
      } else {
        ({ data: result } = await tvApi.tvDetail(id));
      }
    } catch {
      this.setState({
        error: "Sorry, we have some networking problem",
      });
    } finally {
      this.setState({
        id,
        isMovie,
        result,
        loading: false,
      });
    }
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
        path,
      },
      history: { push },
    } = this.props;

    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    const isMovie = path.includes("movie");
    this.getResult(isMovie, parsedId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id) {
      const {
        match: {
          params: { id },
          path,
        },
        history: { push },
      } = this.props;

      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
      const isMovie = path.includes("movie");
      if (
        parsedId !== this.state.id ||
        isMovie !== this.state.isMovie
      ) {
        this.getResult(isMovie, parsedId);
      }
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}
