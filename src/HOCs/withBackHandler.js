import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';

const withBackHandler = (WrappedComponent) => {
  class HOC extends PureComponent {
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
      this.props.history.goBack();
      return true;
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return HOC;
}

export default withBackHandler;
