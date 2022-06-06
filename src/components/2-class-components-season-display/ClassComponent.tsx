import React, { Component } from 'react';
import { getUserGeoLocation } from '../../api/location';
import { Location } from '../../constants/season';
import SeasonDisplay from './SeasonDisplay';
import Spinner from '../shared/Spinner';

type Props = {};

type State = {
  location?: Location;
  errorMessage?: string;
};

class ClassComponent extends Component<Props, State> {
  state: State = {};

  // constructor(props: Props) {
  //   super(props);
  //   this.state = {location: null};
  // }

  componentDidMount(): void {
    this.setLocation();
  }

  // componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): void {
  //   console.log('componentWillUpdate');
  //   console.log(nextProps);
  //   console.log(nextState);
  // }
  //
  // componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
  //   console.log('componentDidUpdate');
  //   console.log(prevProps);
  //   console.log(prevState);
  // }
  //
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  // Not yet lear the following lifecycle
  // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
  //   console.log("shouldComponentUpdate");
  //   return true
  // }
  //
  // static getDerivedStateFromProps(nextProps: Readonly<Props>, nextState: Readonly<State>): void {
  //   console.log("getDerivedStateFromProps");
  // }
  //
  // getSnapshotBeforeUpdate(
  //   prevProps: Readonly<Props>,
  //   prevState: Readonly<State>
  // ): any {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  setLocation = (): void => {
    getUserGeoLocation()
      .then((location: Location) => this.setState({ location }))
      .catch((err: GeolocationPositionError) => this.setState({ errorMessage: err.message }));
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.location) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.location) {
      return <SeasonDisplay location={this.state.location} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default ClassComponent;
