import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    result: null,
    isMovie: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
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
    let result = null;
    try {
      if (path.includes("movie")) {
        ({ data: result } = await moviesApi.movieDetail(
          parsedId
        ));
        this.setState({ isMovie: true });
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
        this.setState({ isMovie: false });
      }
    } catch {
      this.setState({
        error: "Sorry, we have some networking problem",
      });
    } finally {
      this.setState({ loading: false, result });
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
