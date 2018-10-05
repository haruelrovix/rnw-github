import withFetch from 'fetch-hoc';
import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { compose } from 'redux';

import CommitItem from './CommitItem';
import styles from './Shared.style';
import api from '../Utils/api';
import withBackHandler from '../HOCs/withBackHandler';
import withLoader from '../HOCs/withLoader';
import { withRouter } from '../Utils/Routing';

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
    this.state.nextPage ? <ActivityIndicator size="small" /> : <View />
  );

  renderFooter = () => (
    this.state.isLoadingMore ? <View /> : this.renderVisibilitySensor()
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
    Platform.OS === 'web' ?
      <VisibilitySensor onChange={this.onVisibilityChange}>
        {this.renderActivityIndicator()}
      </VisibilitySensor>:
      <View />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Commits</Text>
          <View style={styles.commits}>
            <FlatList
              data={this.state.data}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              ListFooterComponent={this.renderFooter}
            />
          </View>
        </View>
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
  withBackHandler
)(Commits);
