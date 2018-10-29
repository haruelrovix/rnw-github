import withFetch from 'fetch-hoc';
import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View
} from 'react-native';
import { connect } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { compose } from 'redux';

import CommitItem from './CommitItem';
import styles from '../Shared.style';
import api from '../../Utils/api';
import withBackHandler from '../../HOCs/withBackHandler';
import withHeader from '../../HOCs/withHeader';
import withLoader from '../../HOCs/withLoader';
import { isWeb } from '../../Utils/Platform';
import { withRouter } from '../../Utils/Routing';

const getNextPage = response => {
  if (response && response.headers) {
    const link = response.headers.get('link')
    if (link) return link.split(';')[0].replace(/^<|>$/g, '');
  }

  return '';
};

class Commits extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      isLoadingMore: false,
      nextPage: getNextPage(props.response)
    };
  }

  keyExtractor = ( item ) => item.sha;

  loadMore = () => {
    this.setState({ isLoadingMore: true });

    const { data, nextPage } = this.state;

    if (nextPage) {
      fetch(nextPage, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        response.json().then(newData => {
          const newNextPage = getNextPage(response);

          this.setState({
            data: [...data, ...newData],
            isLoadingMore: false,
            nextPage: newNextPage > nextPage ? newNextPage : ''
          });
        });
      })
      .catch(() => {
        this.setState({ isLoadingMore: false });
      });
    }
  }

  onPressItem = ( id ) => {
    this.props.history.push(`/commit/${id}`)
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) this.loadMore();
  };

  renderActivityIndicator = () => (
    <View style={styles.footer}>
      {this.state.nextPage ? <ActivityIndicator size="small" /> : null}
    </View>
  );

  renderFooter = () => (
    this.state.isLoadingMore ? this.renderActivityIndicator() : this.renderVisibilitySensor()
  );

  renderItem = ({ item }) => (
    <CommitItem
      author={item.author}
      commit={item.commit}
      id={item.sha}
      onPress={this.onPressItem}
    />
  );

  renderVisibilitySensor = () => (
    isWeb() ?
      <VisibilitySensor onChange={this.onVisibilityChange}>
        {this.renderActivityIndicator()}
      </VisibilitySensor> :
      <View style={styles.footer} />
  );

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.5}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ github: state.github });

export default compose(
  connect(mapStateToProps),
  withRouter,
  withFetch(({ github }) => api(github).URI),
  withLoader,
  withBackHandler,
  withHeader({ title: 'Commits', renderRight: false })
)(Commits);
