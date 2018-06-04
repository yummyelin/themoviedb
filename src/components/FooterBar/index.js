import React from 'react';
import PropTypes from 'prop-types';
import {
  Footer, FooterTab,
  Button,
  // Icon,
  Text
} from 'native-base';

import styles from './styles';

class FooterBar extends React.Component { //eslint-disable-line
  render() {
    const { props } = this.props;
    return (
      <Footer style={styles.footer}>
        <FooterTab>
          <Button
            vertical
            transparent
            key={1}
            style={styles.footerBtn}
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate('NowPlaying')}
          >
            <Text allowFontScaling={false} style={styles.textColor}>
              Now playing
            </Text>
          </Button>
          <Button
            vertical
            transparent
            key={2}
            style={styles.footerBtn}
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate('Upcoming')}
          >
            <Text allowFontScaling={false} style={styles.textColor}>
              Upcoming
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

FooterBar.propTypes = {
  props: PropTypes.object,
};


export default FooterBar;
