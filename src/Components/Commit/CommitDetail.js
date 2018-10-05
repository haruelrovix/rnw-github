import fetch from 'fetch-hoc';
import React, { PureComponent } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';

import styles from '../Shared.style';
import withBackHandler from '../../HOCs/withBackHandler';
import withLoader from '../../HOCs/withLoader';
import api from '../../Utils/api';
import { withRouter } from '../../Utils/Routing';

class CommitDetail extends PureComponent {
  keyExtractor = ( item ) => item.filename;

  renderItem = ({ item }) => (
    <View>
      <Text>{item.filename}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Commit Detail</Text>
          <View style={styles.commits}>
            <FlatList
              data={this.props.data.files}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
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
  fetch(({ github, match }) => `${api(github).URI}/${match.params.sha}`),
  withLoader,
  withBackHandler
)(CommitDetail);
