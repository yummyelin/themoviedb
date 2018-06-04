import { fromJS } from 'immutable';

const initialState = fromJS({
  nowPlayingList: {},
  upcomingList: {},
  isLoading: false,
  error: '',
});

export default function (state: any = initialState, action: Function) {
  switch (action.type) {
    case 'FETCH_NOWPLAYING':
      return state.set('isLoading', true)
        .set('error', '');
    case 'FETCH_NOWPLAYING_SUCCESS':
      return state.set('isLoading', false)
        .set('nowPlayingList', fromJS(action.list));
    case 'FETCH_NOWPLAYING_FAIL':
      return state.set('isLoading', false)
        .set('error', fromJS(action.error));

    case 'FETCH_UPCOMING':
      return state.set('isLoading', true)
        .set('error', '');
    case 'FETCH_UPCOMING_SUCCESS':
      return state.set('isLoading', false)
        .set('upcomingList', fromJS(action.list));
    case 'FETCH_UPCOMING_FAIL':
      return state.set('isLoading', false)
        .set('error', fromJS(action.error));

    default:
      return state;
  }
}
