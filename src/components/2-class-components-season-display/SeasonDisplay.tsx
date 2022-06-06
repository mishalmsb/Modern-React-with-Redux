import './SeasonDisplay.scss';
import React, { Component } from 'react';
import { Location, Season, seasonConfig } from '../../constants/season';
import { getSeasonByLatAndMonth, getSeasonNameByLatAndMonth } from '../../api/location';

type Props = {
  location: Location;
};

type State = {
  season?: Season;
  seasonName?: string;
};

class SeasonDisplay extends Component<Props, State> {
  state: State = {};

  componentDidMount() {
    this.setSeasonName();
    // this.setSeason();
  }

  setSeasonName() {
    let seasonName: string = getSeasonNameByLatAndMonth(this.props.location.lat, new Date().getMonth());
    this.setState({
      season: seasonConfig[seasonName],
    });
  }

  setSeason() {
    let season: Season = getSeasonByLatAndMonth(this.props.location.lat, new Date().getMonth());
    this.setState({
      season,
    });
  }

  render() {
    return (
      <div className={`season-display ${this.state.season?.name}`}>
        <i className={`icon-left massive ${this.state.season?.icon}`} />
        <h1>{this.state.season?.seasonMessage}</h1>
        <i className={`icon-right massive ${this.state.season?.icon}`} />
      </div>
    );
  }
}

export default SeasonDisplay;
