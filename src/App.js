import React from 'react';
import {
  // StackNavigator as createStackNavigator,
  TabNavigator as createTabNavigator
} from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation'; // #1
// import {
//   createStore, // #2
//   applyMiddleware, // #3
//   compose
// } from 'redux';
// import { combineReducers } from 'redux-immutable'; // #4
// import thunk from 'redux-thunk';
// import {
//   // AppRegistry,
//   StyleSheet,
//   View,
//   Text,
// } from 'react-native';
import { Provider } from 'react-redux';
// import { Root } from 'native-base';
// import {
//   createNavigationPropConstructor, // handles #1 above
//   createNavigationReducer, // handles #2 above
//   createReactNavigationReduxMiddleware, // handles #3 above
//   initializeListeners, // handles #4 above
//   createReduxBoundAddListener,
// } from 'react-navigation-redux-helpers';
import store from './store/store';
import MovieListScreen from './containers/MovieListScreen';
import MovieDetailScreen from './containers/MovieDetailScreen';
import FooterBar from './components/FooterBar';
// import createReducer from './reducers';

const AppNavigator = createTabNavigator({
  NowPlaying: {
    screen: MovieListScreen
  },
  Upcoming: {
    screen: MovieListScreen
  },
  MovieDetail: {
    screen: MovieDetailScreen
  },
}, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarComponent: props => (
    <FooterBar props={props} />
  ),
});

export default class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

// const AppNavigator = createBottomTabNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// });


// const navReducer = createNavigationReducer(AppNavigator);
// const appReducer = combineReducers({
//   nav: navReducer,
//   ...createReducer(),
// });
//
// const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
//
// const navigationPropConstructor = createNavigationPropConstructor('root');
//
// const addListener = createReduxBoundAddListener('root');

// class App extends React.Component { //eslint-disable-line
//   componentDidMount() {
//     initializeListeners('root', this.props.nav);
//   }
//
//   render() {
//     const navigation = navigationPropConstructor(
//       this.props.dispatch,
//       this.props.nav,
//       addListener,
//     );
//     return <AppNavigator navigation={navigation} />;
//   }
// }
//
// const mapStateToProps = state => ({
//   nav: state.nav,
// });
//
// const AppWithNavigationState = connect(mapStateToProps)(App);
//
//
// const composeEnhancers = compose(
//   applyMiddleware(thunk, middleware),
//   global.reduxNativeDevTools ?
//     global.reduxNativeDevTools(/*options*/) :
//     noop => noop
// );
//
// // const store = createStore(appReducer, fromJS({}), composeEnhancers);
// const store = createStore(appReducer, composeEnhancers);
//
// if (global.reduxNativeDevTools) {
//   global.reduxNativeDevTools.updateStore(store);
// }
//
//
// export default class Root extends React.Component { //eslint-disable-line
//   render() {
//     return (
//       <Provider store={store}>
//         <AppWithNavigationState />
//       </Provider>
//     );
//   }
// }
