
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import {
  View,
  // Text,
} from 'react-native';
import {
  List, ListItem,
  Thumbnail,
  Text,
  Body,
  // Left,
  Right,
} from 'native-base';
import { fetchUpcoming } from '../actions';
import { selectUpcomingMoviesArray } from '../selectors/movieListSelectors';

class UpcomingScreen extends React.Component {// eslint-disable-line
  componentDidMount() {
    this.props.getList();
  }

  renderListItem = (item, key) => (
    <ListItem key={key} onPress={() => this.props.navigation.navigate('MovieDetail', {})}>
      <Thumbnail square size={80} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
      <Body>
        <Text>{item.title}</Text>
        <Text note>{item.popularity}</Text>
      </Body>
      <Right>
        <Text note >{item.genre_ids}</Text>
      </Right>
    </ListItem>
  )

  renderList = data => (
    <List>
      {data.map((item, key) => this.renderListItem(item, key))}
    </List>
  )

  render() {
    return (
      <View>
        {this.renderList(this.props.list)}
      </View>
    );
  }
}

UpcomingScreen.propTypes = {
  getList: PropTypes.func,
  list: PropTypes.array,
  navigation: PropTypes.object,
};

function bindAction(dispatch) {
  return {
    getList: () => dispatch(fetchUpcoming()),
  };
}

const mapStateToProps = createPropsSelector({
  list: selectUpcomingMoviesArray,
});

export default connect(mapStateToProps, bindAction)(UpcomingScreen);
