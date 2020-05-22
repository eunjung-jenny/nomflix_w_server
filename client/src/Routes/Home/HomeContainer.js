import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const data = await moviesApi.nowPlaying();
    console.log(data);
  }

  render() {
    return <HomePresenter />;
  }
}
