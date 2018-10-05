import React, { PureComponent } from 'react';
import Error from '../Components/Error';
import Loader from '../Components/Loader';

const withLoader = (WrappedComponent) => {
  class HOC extends PureComponent {
    render() {
      const { data, error, loading } = this.props;

      return (
        loading
        ? <Loader />
        : error
          ? <Error data={data} error={error} />
          : <WrappedComponent {...this.props} />
      );
    }
  }

  return HOC;
}

export default withLoader;
