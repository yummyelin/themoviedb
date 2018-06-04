import { Platform } from 'react-native';

// const deviceHeight = Dimensions.get("window").height;
// const deviceWidth = Dimensions.get("window").width;

export default {
  // buttonArray
  icon: {
    color: 'grey',
    fontSize: Platform.isPad ? 48 : 24,
  },
  textColor: {
    color: 'grey',
    fontSize: Platform.isPad ? 16 : 12,
  },
  footerBtn: {
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 0,
    height: Platform.isPad ? 80 : 56.5,
  },
  footer: {
    // borderTopWidth: 0.1,
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    height: Platform.isPad ? 80 : 56.5,
  },
};
