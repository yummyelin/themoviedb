
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
  Spinner,
} from 'native-base';
import { fetchNowPlaying, fetchUpcoming } from '../actions';
import {
  selectNowPlayingMoviesArray,
  selectUpcomingMoviesArray,
  selectIsLoading
} from '../selectors/movieListSelectors';
import { BASE_URL, POSTER_SIZE } from '../utils/constants';

class MovieListScreen extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.routeName === 'NowPlaying') {
      this.props.getNowPlayingList();
    } else if (this.props.navigation.state.routeName === 'Upcoming') {
      this.props.getUpcomingList();
    }
  }

  renderListItem = (item, key) => (
    <ListItem key={key} onPress={() => this.props.navigation.navigate('MovieDetail', item)}>
      <Thumbnail square size={80} source={{ uri: `${BASE_URL}${POSTER_SIZE}${item.poster_path}` }} />
      <Body>
        <Text>{item.title}</Text>
        <Text note>
          Popularity ({item.popularity ? item.popularity.toFixed(2) : 0})
        </Text>
      </Body>
      <Right>
        <Text note >Genre {item.genre_ids}</Text>{/* TODO */}
      </Right>
    </ListItem>
  )

  renderList = data => (
    <List>
      {data.map((item, key) => this.renderListItem(item, key))}
    </List>
  )

  render() {
    const { nowPlayingList, upcomingList } = this.props;
    const route = this.props.navigation.state.routeName;
    let data;
    if (route === 'NowPlaying') {
      data = nowPlayingList;
    } else if (route === 'Upcoming') {
      data = upcomingList;
    }

    return (
      <View>
        {this.props.isLoading && <Spinner color="black" />}
        {this.renderList(data)}
      </View>
    );
  }
}

MovieListScreen.propTypes = {
  getNowPlayingList: PropTypes.func,
  getUpcomingList: PropTypes.func,
  nowPlayingList: PropTypes.array,
  upcomingList: PropTypes.array,
  navigation: PropTypes.object,
  isLoading: PropTypes.bool,
};

function bindAction(dispatch) {
  return {
    getNowPlayingList: () => dispatch(fetchNowPlaying()),
    getUpcomingList: () => dispatch(fetchUpcoming()),
  };
}

const mapStateToProps = createPropsSelector({
  nowPlayingList: selectNowPlayingMoviesArray,
  upcomingList: selectUpcomingMoviesArray,
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps, bindAction)(MovieListScreen);
