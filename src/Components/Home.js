import { Formik } from 'formik';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from './Button/Button';
import styles from './Shared.style';
import { changeGitHubRepo } from '../Redux/actions';
import { withRouter } from '../Utils/Routing';

class Home extends PureComponent {
  onPressButton = (values) => {
    // Update redux state
    this.props.dispatchChangeGitHubRepo(values);

    // Go to Commit screen
    this.props.history.push('/commit');
  };

  render() {
    const { github: { owner, repo } } = this.props;
    const { input } = styles;

    return (
      <Formik initialValues={{ owner, repo }} onSubmit={this.onPressButton}>
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.container}>
            <Input
              containerStyle={input.containerStyle}
              inputStyle={input.inputStyle}
              label='Owner'
              onChangeText={handleChange('owner')}
              placeholder="Github's owner"
              value={values.owner}
            />
            <Input
              containerStyle={input.containerStyle}
              inputStyle={input.inputStyle}
              label='Repo'
              onChangeText={handleChange('repo')}
              placeholder="Github's repository name"
              value={values.repo}
            />
            <Button title='SUBMIT' onPress={handleSubmit}>
              <Icon
                name='paper-plane'
                size={15}
                color='white'
              />
            </Button>
          </View>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({ github: state.github });

const mapDispatchToProps = dispatch => ({
  dispatchChangeGitHubRepo: (github) => dispatch(changeGitHubRepo(github))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Home);
