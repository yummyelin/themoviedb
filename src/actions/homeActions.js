import * as tmdbApi from '../apis/tmdbApi';

export function fetchNowPlayingAction() {
  return {
    type: 'FETCH_NOWPLAYING',
  };
}

export function fetchNowPlayingSuccessAction(list) {
  return {
    type: 'FETCH_NOWPLAYING_SUCCESS',
    list,
  };
}

export function fetchNowPlayingFailAction(error) {
  return {
    type: 'FETCH_NOWPLAYING_FAIL',
    error,
  };
}

export function fetchNowPlaying(params) {
  return (dispatch) => {
    dispatch(fetchNowPlayingAction());
    return tmdbApi.getNowPlayingList(params)
      .then((list) => {
        dispatch(fetchNowPlayingSuccessAction(list));
      })
      .catch((error) => {
        dispatch(fetchNowPlayingFailAction(error.toString()));
      });
  };
}

export function fetchUpcomingAction() {
  return {
    type: 'FETCH_UPCOMING',
  };
}

export function fetchUpcomingSuccessAction(list) {
  return {
    type: 'FETCH_UPCOMING_SUCCESS',
    list,
  };
}

export function fetchUpcomingFailAction(error) {
  return {
    type: 'FETCH_UPCOMING_FAIL',
    error,
  };
}


export function fetchUpcoming(params) {
  return (dispatch) => {
    dispatch(fetchUpcomingAction());
    return tmdbApi.getUpcomingList(params)
      .then((list) => {
        dispatch(fetchUpcomingSuccessAction(list));
      })
      .catch((error) => {
        dispatch(fetchUpcomingFailAction(error.toString()));
      });
  };
}
