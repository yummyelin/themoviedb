import { createSelector } from 'reselect';
import { Map, List } from 'immutable';

export const selectNowPlayingList = state => state.getIn(['home', 'nowPlayingList'], Map());

export const selectUpcomingList = state => state.getIn(['home', 'upcomingList'], Map());


export const selectNowPlayingMoviesArray = createSelector(
  selectNowPlayingList,
  movies => movies.get('results', List())
);

export const selectUpcomingMoviesArray = createSelector(
  selectUpcomingList,
  movies => movies.get('results', List())
);
