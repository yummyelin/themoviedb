
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  // Text,
  // Image,
} from 'react-native';
import {
  Card, CardItem,
  Thumbnail,
  Text,
  Body,
  Left,
  // Right,
  Button,
  // Icon,
} from 'native-base';

class MovieDetailScreen extends React.Component {
  renderCard = data => (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }} />
          <Body>
            <Text>{data.title}</Text>
            <Text note>({data.release_date})</Text>
            <Text note>Rate: {data.vote_average}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          {/* <Image source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }} style={{ height: 200, width: 500, flex: 1 }} /> */}
          <Text>
            {data.overview}
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Button transparent>
            <Text>{data.vote_count} Votes</Text>
            <Text>Popularity {data.popularity ? data.popularity.toFixed(2) : 0}</Text>
          </Button>
          <Text style={{ color: '#87838B' }}>Genre: {data.genre_ids}</Text>
        </Body>
      </CardItem>
    </Card>
  )

  render() {
    return (
      <View>
        {this.renderCard(this.props.navigation.state.params)}
      </View>
    );
  }
}

MovieDetailScreen.propTypes = {
  navigation: PropTypes.object,
};

export default MovieDetailScreen;
