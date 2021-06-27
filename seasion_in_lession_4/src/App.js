import React, { Component } from 'react';
import SpinLoader from './SpinLoader';

import ScreenDisplay from './ScreenDisplay';

class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      },
    );
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <ScreenDisplay lat={this.state.lat} />;
    }

    return <SpinLoader message="Please accept yours location!!" />;
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default App;
