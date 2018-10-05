import React, { PureComponent } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class CommitItem extends PureComponent {
  onPressItem = () => {
    this.props.onPress(this.props.id);
  }

  render() {
    const { author } = this.props;

    return (
      <TouchableOpacity onPress={this.onPressItem} style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            style={styles.avatar}
            source={{ uri: author ? author.avatar_url : '' }}
          />
          <Text style={styles.author}>{author ? author.login : ''}</Text>
        </View>
        <Text style={styles.message}>{this.props.commit.message}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  author: {
    color: '#586069',
    fontWeight: 'bold',
    marginLeft: 5
  },
  avatar: {
    height: 50,
    width: 50
  },
  container: {
    borderColor: '#eaecef',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomWidth: 0,
    marginRight: 3,
    padding: 3
  },
  message: {
    color: '#444d56'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default CommitItem;
