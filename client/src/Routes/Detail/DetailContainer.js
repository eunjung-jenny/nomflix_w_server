import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    result: null,
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
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
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
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}
